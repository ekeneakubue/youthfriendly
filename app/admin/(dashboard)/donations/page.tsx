import { getDonations } from "@/lib/actions/donations";
import DonationsList from "./DonationsList";

export default async function DonationsPage() {
    const donations = await getDonations();

    return <DonationsList initialDonations={donations} />;
}
