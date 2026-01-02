import { getServices } from "@/lib/actions/services";
import ServicesList from "./ServicesList";

export default async function ServicesPage() {
    // This server-side fetch will trigger loading.tsx automatically
    const services = await getServices();

    return <ServicesList initialServices={services} />;
}
