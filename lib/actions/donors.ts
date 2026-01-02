"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getDonors() {
    try {
        const donors = await prisma.donor.findMany({
            include: {
                donations: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return donors;
    } catch (error) {
        console.error("Failed to fetch donors:", error);
        return [];
    }
}

export async function createDonor(formData: FormData) {
    try {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;

        const donor = await prisma.donor.create({
            data: {
                name,
                email,
                phone: phone?.toString() || null,
            }
        });

        revalidatePath("/admin/donors");
        return { success: true, donor };
    } catch (error) {
        console.error("Failed to create donor:", error);
        throw new Error("Failed to create donor");
    }
}

export async function deleteDonor(donorId: string) {
    try {
        // Delete donor (this will cascade delete all associated donations)
        await prisma.donor.delete({
            where: {
                id: donorId
            }
        });

        revalidatePath("/admin/donors");
        return { success: true };
    } catch (error) {
        console.error("Failed to delete donor:", error);
        throw new Error("Failed to delete donor");
    }
}
