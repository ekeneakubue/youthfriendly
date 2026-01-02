"use client";

import { useState } from "react";
import { createDonor, deleteDonor } from "@/lib/actions/donors";
import {
    Search,
    Filter,
    MoreVertical,
    UserPlus,
    Mail,
    Phone,
    History,
    ExternalLink,
    Heart,
    X,
    Save,
    User,
    Loader2,
    Trash2
} from "lucide-react";

interface DonorsListProps {
    initialDonors: any[];
}

export default function DonorsList({ initialDonors }: DonorsListProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [donors, setDonors] = useState(initialDonors);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    // Consistent date formatting to avoid hydration mismatch
    const formatDate = (date: Date | string) => {
        const d = new Date(date);
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const year = d.getFullYear();
        return `${month}/${day}/${year}`;
    };

    const handleDelete = async (donorId: string, donorName: string) => {
        if (!confirm(`Are you sure you want to delete ${donorName}? This will also delete all their donations.`)) {
            return;
        }

        setDeletingId(donorId);
        try {
            await deleteDonor(donorId);
            setDonors(donors.filter(d => d.id !== donorId));
        } catch (error) {
            alert("Failed to delete donor");
        } finally {
            setDeletingId(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        try {
            await createDonor(formData);
            window.location.reload();
        } catch (error) {
            alert("Failed to create donor profile");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Donor Community</h1>
                    <p className="text-slate-500">View and manage relationship with your supporters.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200"
                >
                    <UserPlus className="h-4 w-4" />
                    Add New Donor
                </button>
            </div>

            {/* Stats row for Donors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <p className="text-sm font-medium text-slate-500 mb-1">Total Profiles</p>
                    <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold text-slate-900">{donors.length}</h3>
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+100%</span>
                    </div>
                </div>
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <p className="text-sm font-medium text-slate-500 mb-1">Total Contributions</p>
                    <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold text-slate-900">
                            {donors.reduce((acc, d) => acc + (d.donations?.length || 0), 0)}
                        </h3>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Active</span>
                    </div>
                </div>
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <p className="text-sm font-medium text-slate-500 mb-1">Retention Rate</p>
                    <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold text-slate-900">N/A</h3>
                        <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">New CRM</span>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100">
                    <div className="relative flex-1 w-full max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                        />
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                            <Filter className="h-4 w-4" />
                            Segment
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Donor Profile</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact Info</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Historical</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Joined</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                            {donors.map((donor, i) => (
                                <tr key={donor.id || i} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm uppercase">
                                                {donor.name.split(' ').map((n: string) => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900">{donor.name}</p>
                                                <div className="flex items-center gap-1 mt-0.5">
                                                    <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
                                                    <span className="text-[10px] text-slate-500 uppercase tracking-wide">Community Member</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-xs text-slate-600">
                                                <Mail className="h-3 w-3 text-slate-400" />
                                                {donor.email}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-slate-600">
                                                <Phone className="h-3 w-3 text-slate-400" />
                                                {donor.phone || "No phone recorded"}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-1">
                                            <span className="text-sm text-slate-700 font-bold">
                                                ₦{donor.donations?.reduce((acc: number, d: any) => acc + (d.amount || 0), 0).toLocaleString()}
                                            </span>
                                            <p className="text-[10px] uppercase font-bold text-slate-400">
                                                {donor.donations?.length || 0} Total Gifts
                                            </p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500">
                                        {formatDate(donor.createdAt)}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleDelete(donor.id, donor.name)}
                                                disabled={deletingId === donor.id}
                                                className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                title="Delete donor"
                                            >
                                                {deletingId === donor.id ? (
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                ) : (
                                                    <Trash2 className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Donor Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
                    <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Add New Donor</h2>
                                <p className="text-sm text-slate-500">Create a new donor profile in the system.</p>
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
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <input
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="John Doe"
                                            className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                            <input
                                                name="phone"
                                                type="tel"
                                                placeholder="+234..."
                                                className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                            />
                                        </div>
                                    </div>
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
                                    {isSubmitting ? "Creating..." : "Create Donor Profile"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
