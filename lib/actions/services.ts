"use server";

import { prisma } from "@/lib/db";
// Use local type definitions to avoid issues with @prisma/client generation on Vercel
type ServiceStatus = "ACTIVE" | "DRAFT" | "HIDDEN";
type ServiceCategory = "HEALTH" | "EDUCATION" | "WELFARE" | "SKILLS";
import { revalidatePath } from "next/cache";

export async function getServices() {
    return await prisma.service.findMany({
        orderBy: { createdAt: "desc" },
    });
}

export async function getActiveServices() {
    return await prisma.service.findMany({
        where: { status: "ACTIVE" },
        orderBy: { createdAt: "desc" },
    });
}

export async function createService(formData: FormData) {
    const title = formData.get("title") as string;
    const category = formData.get("category") as ServiceCategory;
    const status = formData.get("status") as ServiceStatus;
    const description = formData.get("description") as string;

    if (!title || !description || !category || !status) {
        throw new Error("Missing required fields");
    }

    await prisma.service.create({
        data: {
            title,
            description,
            category,
            status,
        },
    });

    revalidatePath("/admin/services");
    revalidatePath("/");
}

export async function updateService(id: string, formData: FormData) {
    const title = formData.get("title") as string;
    const category = formData.get("category") as ServiceCategory;
    const status = formData.get("status") as ServiceStatus;
    const description = formData.get("description") as string;

    if (!title || !description || !category || !status) {
        throw new Error("Missing required fields");
    }

    await prisma.service.update({
        where: { id },
        data: {
            title,
            description,
            category,
            status,
        },
    });

    revalidatePath("/admin/services");
    revalidatePath("/");
}

export async function deleteService(id: string) {
    await prisma.service.delete({
        where: { id },
    });

    revalidatePath("/admin/services");
    revalidatePath("/");
}
