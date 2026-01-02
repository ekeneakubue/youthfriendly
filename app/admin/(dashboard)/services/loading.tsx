import { Loader2, Plus, AlertCircle } from "lucide-react";

export default function ServicesLoading() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Program Services</h1>
                    <p className="text-slate-500">Manage the core programs and offerings visible on the home page.</p>
                </div>
                <div className="h-10 w-36 bg-slate-100 rounded-lg animate-pulse" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-[220px] relative overflow-hidden">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-slate-50 rounded-xl w-12 h-12 animate-pulse" />
                            <div className="flex gap-1">
                                <div className="h-8 w-8 bg-slate-50 rounded-lg animate-pulse" />
                                <div className="h-8 w-8 bg-slate-50 rounded-lg animate-pulse" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="h-3 w-16 bg-slate-50 rounded animate-pulse" />
                            <div className="h-5 w-48 bg-slate-50 rounded animate-pulse" />
                            <div className="space-y-2">
                                <div className="h-3 w-full bg-slate-50 rounded animate-pulse" />
                                <div className="h-3 w-5/6 bg-slate-50 rounded animate-pulse" />
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                                <div className="h-4 w-20 bg-slate-50 rounded animate-pulse" />
                                <div className="h-3 w-16 bg-slate-50 rounded animate-pulse" />
                            </div>
                        </div>
                    </div>
                ))}

                <div className="h-full min-h-[200px] border-2 border-dashed border-slate-100 rounded-2xl flex flex-col items-center justify-center p-6 bg-slate-50/10">
                    <div className="p-3 bg-slate-50 rounded-full text-slate-200">
                        <Plus className="h-6 w-6" />
                    </div>
                    <div className="mt-3 h-4 w-32 bg-slate-50 rounded animate-pulse" />
                </div>
            </div>

            <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 flex items-start gap-4">
                <div className="p-2 bg-slate-100 text-slate-300 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                </div>
                <div className="space-y-2 flex-1">
                    <div className="h-4 w-32 bg-slate-100 rounded animate-pulse" />
                    <div className="h-3 w-full bg-slate-100 rounded animate-pulse" />
                </div>
            </div>

            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100">
                    <Loader2 className="h-5 w-5 animate-spin text-emerald-600" />
                    <span className="text-sm font-bold text-slate-900 tracking-tight">Syncing services...</span>
                </div>
            </div>
        </div>
    );
}
