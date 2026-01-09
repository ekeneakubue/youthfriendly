"use client";

import { useState } from "react";
import {
    Bell,
    Shield,
    User,
    Globe,
    Database,
    Lock,
    ChevronRight,
    Save,
    Loader2
} from "lucide-react";

export default function SettingsPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSave = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Settings saved successfully!");
        }, 1500);
    };
    const sections = [
        { id: "profile", name: "Profile Settings", icon: User, desc: "Personal info and avatar" },
        { id: "security", name: "Security", icon: Lock, desc: "Password and authentication" },
        { id: "notifications", name: "Notifications", icon: Bell, desc: "Alerts and communication" },
        { id: "localization", name: "Localization", icon: Globe, desc: "Currency and timezones" },
        { id: "data", name: "Data & Storage", icon: Database, desc: "Exports and backups" },
    ];

    return (
        <div className="max-w-5xl">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Dashboard Settings</h1>
                <p className="text-slate-900 font-medium">Configure your administrative workspace and account preferences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Navigation */}
                <nav className="md:col-span-1 space-y-1">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${section.id === "profile"
                                ? "bg-white text-emerald-700 shadow-sm border border-slate-200"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                }`}
                        >
                            <section.icon className={`h-4 w-4 ${section.id === "profile" ? "text-emerald-600" : "text-slate-400"}`} />
                            {section.name}
                        </button>
                    ))}
                </nav>

                {/* Content */}
                <div className="md:col-span-3 space-y-6">
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden text-sm">
                        <div className="p-6 border-b border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-1">Public Profile</h3>
                            <p className="text-slate-900 font-bold">This information will be visible to other administrators.</p>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                <div className="h-16 w-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                                    <User className="h-8 w-8" />
                                </div>
                                <div>
                                    <button className="px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors">
                                        Upload Photo
                                    </button>
                                    <button className="ml-2 px-3 py-1.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                                        Remove
                                    </button>
                                    <p className="mt-2 text-[10px] text-slate-900 uppercase font-bold tracking-widest">JPG, GIF or PNG. Max size 2MB</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="font-bold text-slate-700">Display Name</label>
                                    <input
                                        type="text"
                                        defaultValue="Super Admin"
                                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-base text-slate-900"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="font-bold text-slate-700">Email Address</label>
                                    <input
                                        type="email"
                                        defaultValue="super@yfrc.edu.ng"
                                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-base text-slate-900"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="font-bold text-slate-700">Bio / About</label>
                                <textarea
                                    rows={3}
                                    placeholder="Tell us a bit about your role..."
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-base text-slate-900 placeholder:text-slate-400"
                                ></textarea>
                            </div>
                        </div>

                        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex justify-end gap-3">
                            <button className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors">
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={isSubmitting}
                                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                ) : (
                                    <Save className="h-3.5 w-3.5" />
                                )}
                                {isSubmitting ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl h-fit">
                                    <Shield className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Two-Factor Authentication</h3>
                                    <p className="text-sm text-slate-900 font-bold mt-1">Add an extra layer of security to your admin account.</p>
                                </div>
                            </div>
                            <button className="px-3 py-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-all">
                                Enable 2FA
                            </button>
                        </div>
                    </div>

                    <div className="bg-rose-50 border border-rose-100 rounded-2xl shadow-sm p-6">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="font-bold text-rose-900">Danger Zone</h3>
                                <p className="text-sm text-rose-700 mt-1">Deleting your account is permanent. High-level permissions will be lost.</p>
                            </div>
                            <button className="px-3 py-1.5 text-xs font-bold text-rose-600 hover:bg-rose-100/50 transition-all rounded-lg">
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
