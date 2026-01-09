"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/lib/actions/auth";
import {
    LayoutDashboard,
    Users,
    HeartHandshake,
    Heart,
    UserCog,
    Settings,
    LogOut,
    Bell,
    Search
} from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const menuItems = [
        { name: "Overview", href: "/admin", icon: LayoutDashboard },
        { name: "Donors", href: "/admin/donors", icon: Users },
        { name: "Donations", href: "/admin/donations", icon: HeartHandshake },
        { name: "Services", href: "/admin/services", icon: Heart },
        { name: "Users", href: "/admin/users", icon: UserCog },
        { name: "Settings", href: "/admin/settings", icon: Settings },
    ];

    return (
        <div className="flex min-h-screen bg-[#f8fafc]">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-200 bg-white">
                <div className="flex h-full flex-col">
                    <div className="flex h-16 items-center px-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">Y</span>
                            </div>
                            <span className="text-lg font-bold text-slate-900 tracking-tight">YFRC Admin</span>
                        </Link>
                    </div>

                    <nav className="flex-1 space-y-1 px-3 py-4">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
                                        ? "bg-emerald-50 text-emerald-700"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                        }`}
                                >
                                    <item.icon className={`h-5 w-5 ${isActive ? "text-emerald-600" : "text-slate-400"}`} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="border-t border-slate-100 p-4">
                        <button
                            onClick={async () => {
                                await logout();
                                window.location.href = "/admin/login";
                            }}
                            className="flex w-full items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors"
                        >
                            <LogOut className="h-5 w-5 text-slate-400" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 pl-64">
                {/* Top Header */}
                <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-md">
                    <div className="flex items-center gap-4 flex-1 max-w-xl">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search donors, donations..."
                                className="w-full pl-10 pr-4 py-2 text-base text-slate-900 border border-slate-300 rounded-full bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-slate-500 hover:text-emerald-600 transition-colors">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white"></span>
                        </button>
                        <div className="h-8 w-px bg-slate-200 mx-1"></div>
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-semibold text-slate-900 leading-tight">Super Admin</p>
                                <p className="text-xs text-slate-500">Super Admin</p>
                            </div>
                            <div className="h-9 w-9 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold">
                                SA
                            </div>
                        </div>
                    </div>
                </header>

                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
