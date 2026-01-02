import { Loader2, Wallet, Package, TrendingUp } from "lucide-react";

export default function DonationsLoading() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-slate-900">Donations Ledger</h1>
                    <p className="text-slate-500">Track and manage all contributions to the Resource Center.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-10 w-32 bg-slate-100 rounded-lg animate-pulse" />
                    <div className="h-10 w-48 bg-slate-100 rounded-lg animate-pulse" />
                </div>
            </div>

            {/* Tabs Loading */}
            <div className="flex border-b border-slate-200">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="px-6 py-3 h-11 w-28 bg-slate-50 border-b-2 border-transparent" />
                ))}
            </div>

            {/* Stats Summary Loading */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm h-24 flex items-center gap-4">
                        <div className="h-12 w-12 bg-slate-100 rounded-xl animate-pulse" />
                        <div className="space-y-2">
                            <div className="h-3 w-20 bg-slate-100 rounded animate-pulse" />
                            <div className="h-5 w-24 bg-slate-100 rounded animate-pulse" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Table Loading */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-100 bg-slate-50/30">
                    <div className="h-10 w-full max-w-sm bg-white rounded-lg border border-slate-200 animate-pulse" />
                </div>

                <div className="p-6 space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0">
                            <div className="flex gap-4">
                                <div className="h-4 w-20 bg-slate-100 rounded animate-pulse" />
                                <div className="h-4 w-32 bg-slate-100 rounded animate-pulse" />
                            </div>
                            <div className="h-4 w-16 bg-slate-100 rounded animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100">
                    <Loader2 className="h-5 w-5 animate-spin text-emerald-600" />
                    <span className="text-sm font-bold text-slate-900 tracking-tight">Syncing ledger...</span>
                </div>
            </div>
        </div>
    );
}
