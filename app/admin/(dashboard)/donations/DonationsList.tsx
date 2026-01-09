"use client";

import { useState } from "react";
import { recordDonation, deleteDonation } from "@/lib/actions/donations";
import {
    Download,
    Search,
    Filter,
    MoreVertical,
    ArrowUpRight,
    TrendingUp,
    Package,
    Wallet,
    X,
    Save,
    Calendar,
    User,
    Loader2,
    Mail,
    Phone,
    Trash2
} from "lucide-react";

interface Donor {
    id: string;
    name: string;
}

interface Donation {
    id: string;
    donorId: string;
    donor?: Donor;
    type: "MONETARY" | "FOOD" | "OTHER";
    amount: number | null;
    items: string | null;
    status: "VERIFIED" | "PROCESSING" | "FLAGGED";
    date: Date | string;
}

interface DonationsListProps {
    initialDonations: Donation[];
}

export default function DonationsList({ initialDonations }: DonationsListProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [donations, setDonations] = useState(initialDonations);
    const [filter, setFilter] = useState("All Donations");
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const filteredDonations = donations.filter((d) => {
        if (filter === "All Donations") return true;
        if (filter === "Monetary") return d.type === "MONETARY";
        if (filter === "Food Bank") return d.type === "FOOD";
        return true;
    });

    const handleDelete = async (donationId: string, donorName: string) => {
        if (!confirm(`Are you sure you want to delete this donation from ${donorName}?`)) {
            return;
        }

        setDeletingId(donationId);
        try {
            await deleteDonation(donationId);
            setDonations(donations.filter(d => d.id !== donationId));
        } catch (error) {
            alert("Failed to delete donation");
        } finally {
            setDeletingId(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        try {
            await recordDonation(formData);
            // In a real app, we'd fetch or use the returned data
            // For now, we'll just close and let revalidatePath handle it (if we were on server)
            // But since we want immediate feedback, let's refresh page or just close
            window.location.reload(); // Simple way to refresh server data
        } catch (error) {
            alert("Failed to record donation");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Donations Ledger</h1>
                    <p className="text-slate-500">Track and manage all contributions to the Resource Center.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                        <Download className="h-4 w-4" />
                        Export CSV
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                        Record Offline Donation
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-200">
                {["All Donations", "Monetary", "Food Bank", "Anonymous"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setFilter(tab)}
                        className={`px-6 py-3 text-sm font-medium transition-all ${filter === tab
                            ? "text-emerald-600 border-b-2 border-emerald-600"
                            : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <Wallet className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Total Monetary</p>
                            <h3 className="text-xl font-bold text-slate-900">
                                ₦{donations.filter((d: Donation) => d.type === 'MONETARY').reduce((acc: number, curr: Donation) => acc + (curr.amount || 0), 0).toLocaleString()}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <Package className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Donation Counts</p>
                            <h3 className="text-xl font-bold text-slate-900">{donations.length} Contributions</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                            <TrendingUp className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Active Donors</p>
                            <h3 className="text-xl font-bold text-slate-900">{new Set(donations.map((d: Donation) => d.donorId)).size} Profiles</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 bg-slate-50/30">
                    <div className="relative flex-1 w-full max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Filter by donor name..."
                            className="w-full pl-10 pr-4 py-2 text-base text-slate-900 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 placeholder:text-slate-400"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors">
                        <Filter className="h-4 w-4" />
                        More Filters
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Transaction ID</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Donor</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Value</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredDonations.map((d) => (
                                <tr key={d.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-mono text-slate-500">{d.id.slice(-8).toUpperCase()}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-semibold text-slate-900">{d.donor?.name || "Unknown"}</p>
                                        <span className={`text-[10px] uppercase font-bold tracking-tight ${d.type === "MONETARY" ? "text-blue-600" : "text-emerald-600"
                                            }`}>
                                            {d.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5 font-bold text-slate-800">
                                            {d.type === 'MONETARY' ? `₦${(d.amount || 0).toLocaleString()}` : (d.items || "N/A")}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${d.status === "VERIFIED" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                                            }`}>
                                            {d.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500">
                                        {new Date(d.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handleDelete(d.id, d.donor?.name || "Unknown")}
                                            disabled={deletingId === d.id}
                                            className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            title="Delete donation"
                                        >
                                            {deletingId === d.id ? (
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                            ) : (
                                                <Trash2 className="h-4 w-4" />
                                            )}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {filteredDonations.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                                        No donation records found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Offline Donation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
                    <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Record Offline Donation</h2>
                                <p className="text-sm text-slate-500">Manually log a physical or manual transaction.</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form className="p-8 space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Donor Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <input
                                            name="donorName"
                                            type="text"
                                            required
                                            placeholder="Find or enter donor name"
                                            className="w-full pl-10 pr-4 py-2 text-base text-slate-900 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Email (Optional)</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                                            <input
                                                name="donorEmail"
                                                type="email"
                                                placeholder="email@example.com"
                                                className="w-full pl-9 pr-4 py-2 text-base text-slate-900 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Phone (Optional)</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                                            <input
                                                name="donorPhone"
                                                type="tel"
                                                placeholder="+234..."
                                                className="w-full pl-9 pr-4 py-2 text-base text-slate-900 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Donation Type</label>
                                        <select
                                            name="type"
                                            className="w-full px-4 py-2 text-base text-slate-900 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-white font-medium"
                                        >
                                            <option value="MONETARY">Monetary</option>
                                            <option value="FOOD">Food Bank</option>
                                            <option value="OTHER">Other Items</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Value / Amount</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold">₦</span>
                                            <input
                                                name="amount"
                                                type="number"
                                                placeholder="0.00"
                                                className="w-full pl-8 pr-4 py-2 text-base text-slate-900 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium placeholder:text-slate-400"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Date of Donation</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                            <input
                                                name="date"
                                                type="date"
                                                defaultValue={new Date().toISOString().split('T')[0]}
                                                className="w-full pl-10 pr-4 py-2 text-base text-slate-900 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Frequency</label>
                                        <select
                                            name="frequency"
                                            className="w-full px-4 py-2 text-base text-slate-900 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-white font-medium"
                                        >
                                            <option value="ONE_TIME">One-Time</option>
                                            <option value="MONTHLY">Monthly</option>
                                            <option value="QUARTERLY">Quarterly</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Note (Optional)</label>
                                    <textarea
                                        name="note"
                                        rows={2}
                                        placeholder="Add any specific details about this donation..."
                                        className="w-full px-4 py-2 text-base text-slate-900 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none font-medium placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-4 py-2.5 text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <Save className="h-4 w-4" />
                                    )}
                                    {isSubmitting ? "Recording..." : "Log Donation"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
