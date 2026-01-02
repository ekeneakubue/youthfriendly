import { getDonors } from "@/lib/actions/donors";
import DonorsList from "./DonorsList";

export default async function DonorsPage() {
    const donors = await getDonors();

    return <DonorsList initialDonors={donors} />;
}
