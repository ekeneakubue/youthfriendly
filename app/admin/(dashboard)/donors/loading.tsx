import { Loader2, UserPlus, Heart } from "lucide-react";

export default function DonorsLoading() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-slate-900">Donor Community</h1>
                    <p className="text-slate-500">View and manage relationship with your supporters.</p>
                </div>
                <div className="h-10 w-40 bg-slate-100 rounded-lg animate-pulse" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm h-24">
                        <div className="h-3 w-20 bg-slate-50 rounded mb-2 animate-pulse" />
                        <div className="h-8 w-16 bg-slate-50 rounded animate-pulse" />
                    </div>
                ))}
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-100">
                    <div className="h-10 w-full max-w-sm bg-slate-50 rounded-lg animate-pulse" />
                </div>

                <div className="p-6 space-y-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-slate-100 rounded-xl animate-pulse" />
                                <div className="space-y-2">
                                    <div className="h-4 w-32 bg-slate-100 rounded animate-pulse" />
                                    <div className="h-3 w-24 bg-slate-100 rounded animate-pulse" />
                                </div>
                            </div>
                            <div className="h-4 w-24 bg-slate-100 rounded animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100">
                    <Loader2 className="h-5 w-5 animate-spin text-emerald-600" />
                    <span className="text-sm font-bold text-slate-900 tracking-tight">Accessing records...</span>
                </div>
            </div>
        </div>
    );
}
