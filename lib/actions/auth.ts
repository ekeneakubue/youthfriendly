"use server";

import { cookies } from "next/headers";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function login(formData: FormData) {
    try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (!email || !password) {
            return { success: false, error: "Email and password are required" };
        }

        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return { success: false, error: "Invalid credentials" };
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return { success: false, error: "Invalid credentials" };
        }

        // Check if user has ADMIN or MODERATOR role
        if (user.role !== "ADMIN" && user.role !== "MODERATOR") {
            return { success: false, error: "Access denied. Admin or Moderator role required." };
        }

        // Create session
        const cookieStore = await cookies();
        cookieStore.set("user_session", JSON.stringify({
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
        }), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7 // 7 days
        });

        return { success: true };
    } catch (error) {
        console.error("Login error:", error);
        return { success: false, error: "Login failed" };
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete("user_session");
}

export async function getSession() {
    try {
        const cookieStore = await cookies();
        const session = cookieStore.get("user_session");

        if (!session) {
            return null;
        }

        return JSON.parse(session.value);
    } catch {
        return null;
    }
}

export async function requireAdmin() {
    const session = await getSession();

    if (!session) {
        return { authorized: false, redirect: "/admin/login" };
    }

    if (session.role !== "ADMIN" && session.role !== "MODERATOR") {
        return { authorized: false, redirect: "/admin/login" };
    }

    return { authorized: true, user: session };
}
