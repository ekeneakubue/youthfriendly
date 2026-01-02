"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

export async function getUsers() {
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return users;
    } catch (error) {
        console.error("Failed to fetch users:", error);
        return [];
    }
}

export async function createUser(formData: FormData) {
    try {
        console.log("createUser called");
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const role = formData.get("role") as string;

        console.log("Form data:", { name, email, role, hasPassword: !!password });

        if (!name || !email || !password || !role) {
            throw new Error("All fields are required");
        }

        console.log("Hashing password...");
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Password hashed successfully");

        console.log("Creating user in database...");
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: role as any, // ADMIN, MODERATOR, or STUDENT
            }
        });
        console.log("User created successfully:", user.id);

        revalidatePath("/admin/users");
        return { success: true, user };
    } catch (error: any) {
        console.error("Failed to create user:", error);
        console.error("Error details:", error.message, error.stack);
        throw new Error(error.message || "Failed to create user");
    }
}

export async function deleteUser(userId: string) {
    try {
        await prisma.user.delete({
            where: {
                id: userId
            }
        });

        revalidatePath("/admin/users");
        return { success: true };
    } catch (error) {
        console.error("Failed to delete user:", error);
        throw new Error("Failed to delete user");
    }
}
