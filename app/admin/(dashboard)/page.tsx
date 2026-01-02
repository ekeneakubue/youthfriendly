import Link from "next/link";
import {
    TrendingUp,
    Users,
    CircleDollarSign,
    Heart,
    Package,
    Calendar,
    ChevronRight,
    MoreVertical
} from "lucide-react";

export default function AdminDashboard() {
    const stats = [
        { label: "Total Donations", value: "₦2,450,000", change: "+12.5%", icon: Heart, color: "bg-rose-100 text-rose-600" },
        { label: "Active Donors", value: "128", change: "+4.3%", icon: Users, color: "bg-blue-100 text-blue-600" },
        { label: "Food Items", value: "450kg", change: "+18.2%", icon: Package, color: "bg-emerald-100 text-emerald-600" },
        { label: "Support Requests", value: "42", change: "-2.1%", icon: Calendar, color: "bg-amber-100 text-amber-600" },
    ];

    const recentDonations = [
        { name: "John Doe", email: "john@example.com", amount: "₦50,000", date: "2 hours ago", type: "Monetary", status: "Completed" },
        { name: "Global Health NGO", email: "contact@ghngo.org", amount: "200kg Rice", date: "5 hours ago", type: "Food Bank", status: "Processing" },
        { name: "Jane Smith", email: "jane@example.com", amount: "₦25,000", date: "1 day ago", type: "Monetary", status: "Completed" },
        { name: "UNN Alumni Assoc.", email: "alumni@unn.edu.ng", amount: "₦500,000", date: "2 days ago", type: "Monetary", status: "Completed" },
        { name: "Michael Okoro", email: "mike@example.com", amount: "50kg Beans", date: "3 days ago", type: "Food Bank", status: "Completed" },
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
                    <p className="text-slate-500">Welcome back, Super Admin. Here&apos;s what&apos;s happening today.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                        Download Report
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors">
                        Add Donation
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-2 rounded-xl ${stat.color}`}>
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <div className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                                }`}>
                                {stat.change}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Placeholder */}
                <div className="lg:col-span-2 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">Donation Trends</h3>
                            <p className="text-sm text-slate-500">Performance over the last 30 days</p>
                        </div>
                        <select className="text-sm border-none bg-slate-50 rounded-lg focus:ring-0 cursor-pointer">
                            <option>Last 30 Days</option>
                            <option>Last 6 Months</option>
                            <option>This Year</option>
                        </select>
                    </div>

                    {/* Simple SVG Chart Representation */}
                    <div className="h-[300px] w-full relative group">
                        <div className="absolute inset-0 flex items-end justify-between gap-2 px-2">
                            {[40, 60, 45, 80, 55, 90, 70, 85, 60, 75, 50, 65].map((height, i) => (
                                <div key={i} className="flex-1 group/bar relative">
                                    <div
                                        className="w-full bg-emerald-500/20 group-hover/bar:bg-emerald-500/40 rounded-t-sm transition-all duration-300"
                                        style={{ height: `${height}%` }}
                                    >
                                        <div
                                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
                                        >
                                            ₦{(height * 10000).toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="text-[10px] text-slate-400 mt-2 text-center">
                                        {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Secondary Widget: Top Categories */}
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Support Distribution</h3>
                    <div className="space-y-6">
                        {[
                            { label: "Health & Wellness", value: 45, color: "bg-emerald-500" },
                            { label: "Food Bank", value: 30, color: "bg-blue-500" },
                            { label: "Skills Training", value: 25, color: "bg-amber-500" },
                        ].map((cat) => (
                            <div key={cat.label}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-medium text-slate-700">{cat.label}</span>
                                    <span className="text-slate-500">{cat.value}%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className={`h-full ${cat.color} rounded-full`} style={{ width: `${cat.value}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-500 text-white rounded-lg">
                                <TrendingUp className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-emerald-800 uppercase">Growth Alert</p>
                                <p className="text-sm text-emerald-700">Donations are up 15% this week!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Donations Table */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-slate-900">Recent Transactions</h3>
                    <Link href="/admin/donations" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1 group">
                        View all
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>

                <div className="-mx-6 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Donor</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Value</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {recentDonations.map((donation, i) => (
                                <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs">
                                                {donation.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-slate-900 leading-none">{donation.name}</p>
                                                <p className="text-xs text-slate-500 mt-1">{donation.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${donation.type === "Monetary" ? "bg-blue-50 text-blue-700" : "bg-emerald-50 text-emerald-700"
                                            }`}>
                                            {donation.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-700">{donation.amount}</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">{donation.date}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5">
                                            <div className={`h-1.5 w-1.5 rounded-full ${donation.status === "Completed" ? "bg-emerald-500" : "bg-amber-500"
                                                }`} />
                                            <span className="text-sm text-slate-600">{donation.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100">
                                            <MoreVertical className="h-4 w-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
