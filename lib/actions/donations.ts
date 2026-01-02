"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { DonationType, DonationFrequency } from "@prisma/client";

export async function getDonations() {
    try {
        const donations = await prisma.donation.findMany({
            include: {
                donor: true
            },
            orderBy: {
                date: 'desc'
            }
        });
        return donations;
    } catch (error) {
        console.error("Failed to fetch donations:", error);
        return [];
    }
}

export async function getDonors() {
    try {
        const donors = await prisma.donor.findMany({
            orderBy: {
                name: 'asc'
            }
        });
        return donors;
    } catch (error) {
        console.error("Failed to fetch donors:", error);
        return [];
    }
}

export async function recordDonation(formData: FormData) {
    console.log("recordDonation called with fields:", Array.from(formData.keys()));
    try {
        const name = (formData.get("name") || formData.get("donorName")) as string;
        const email = (formData.get("email") || formData.get("donorEmail")) as string;
        const phone = (formData.get("phone") || formData.get("donorPhone")) as string;
        const type = (formData.get("donationType") || formData.get("type"))?.toString().toUpperCase();
        const amount = formData.get("amount") as string;
        const items = (formData.get("foodItems") || formData.get("items")) as string;
        const dateString = (formData.get("date") || formData.get("donationDate")) as string;
        const note = (formData.get("message") || formData.get("note")) as string;
        const frequency = (formData.get("frequency"))?.toString().toUpperCase().replace("-", "_");

        if (!name) throw new Error("Name is required");

        // 1. Handle Donor
        let donor = await prisma.donor.findFirst({
            where: {
                OR: [
                    { email: email || undefined },
                    { name: name }
                ]
            }
        });

        if (!donor) {
            donor = await prisma.donor.create({
                data: {
                    name,
                    email: email?.toString() || `anon-${Date.now()}@example.com`,
                    phone: phone?.toString() || null
                }
            });
        }

        const donationData = {
            donorId: donor.id,
            type: (type as DonationType) || "MONETARY",
            amount: amount ? parseFloat(amount) : null,
            items: items || null,
            frequency: (frequency as DonationFrequency) || "ONE_TIME",
            note: note || null,
            date: dateString ? new Date(dateString) : new Date(),
            status: "VERIFIED" as const
        };

        console.log("Attempting to create donation with data:", JSON.stringify(donationData, null, 2));

        // 2. Create Donation
        const donation = await prisma.donation.create({
            data: donationData
        });

        revalidatePath("/admin/donations");
        revalidatePath("/admin/donors");
        return { success: true, donation };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Failed to record donation";
        console.error("Failed to record donation:", errorMessage);
        throw new Error(errorMessage);
    }
}

export async function deleteDonation(donationId: string) {
    try {
        await prisma.donation.delete({
            where: {
                id: donationId
            }
        });

        revalidatePath("/admin/donations");
        revalidatePath("/admin/donors");
        return { success: true };
    } catch (error) {
        console.error("Failed to delete donation:", error);
        throw new Error("Failed to delete donation");
    }
}
