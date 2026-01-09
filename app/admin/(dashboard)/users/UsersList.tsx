"use client";

import { useState } from "react";
import { createUser } from "@/lib/actions/users";
import {
    Plus,
    Shield,
    Mail,
    MoreVertical,
    UserPlus,
    X,
    ShieldCheck,
    User,
    Save,
    Loader2,
    Lock,
    Eye,
    EyeOff
} from "lucide-react";

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: Date | string;
}

interface UsersListProps {
    initialUsers: User[];
}

export default function UsersList({ initialUsers }: UsersListProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [users, setUsers] = useState(initialUsers);

    const roles = {
        ADMIN: { label: "Admin", color: "bg-purple-100 text-purple-700" },
        MODERATOR: { label: "Moderator", color: "bg-blue-100 text-blue-700" },
        STUDENT: { label: "Student", color: "bg-slate-100 text-slate-700" },
    };

    // Consistent date formatting to avoid hydration mismatch
    const formatDate = (date: Date | string) => {
        const d = new Date(date);
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const year = d.getFullYear();
        return `${month}/${day}/${year}`;
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">User Management</h1>
                    <p className="text-slate-900 font-medium">Manage users and their permission levels.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                    <UserPlus className="h-4 w-4" />
                    Add User
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* User Cards */}
                {users.map((user: User, i: number) => (
                    <div key={user.id || i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-lg">
                                {user.name.split(' ').map((n: string) => n[0]).join('')}
                            </div>
                            <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50">
                                <MoreVertical className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-slate-900 leading-tight">{user.name}</h3>
                            <p className="text-sm text-slate-900 font-bold">{user.email}</p>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${roles[user.role as keyof typeof roles].color}`}>
                                {roles[user.role as keyof typeof roles].label}
                            </span>
                        </div>
                        <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                <span className="text-xs font-bold text-slate-900">Active</span>
                            </div>
                            <span className="text-[10px] text-slate-900 font-bold">
                                {formatDate(user.createdAt)}
                            </span>
                        </div>
                    </div>
                ))}

                {/* Quick Add Card */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="h-full min-h-[200px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all group"
                >
                    <div className="p-3 bg-slate-50 rounded-full text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                        <Plus className="h-6 w-6" />
                    </div>
                    <p className="mt-3 text-sm font-bold text-slate-800 group-hover:text-emerald-700">Add New User</p>
                </button>
            </div>

            {/* Add User Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
                    <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Add New User</h2>
                                <p className="text-sm text-slate-900 font-bold">Create a new user account with role assignment.</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form className="p-8 space-y-6" onSubmit={async (e) => {
                            e.preventDefault();
                            setIsSubmitting(true);
                            const formData = new FormData(e.currentTarget);

                            try {
                                await createUser(formData);
                                setIsModalOpen(false);
                                window.location.reload();
                            } catch (error) {
                                alert("Failed to create user. Email might already exist.");
                                setIsSubmitting(false);
                            }
                        }}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Jane Smith"
                                            className="w-full pl-10 pr-4 py-2 text-base text-black border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-bold placeholder:text-black"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Work Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="jane@yfrc.edu.ng"
                                            className="w-full pl-10 pr-4 py-2 text-base text-black border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-bold placeholder:text-black"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            required
                                            placeholder="••••••••"
                                            className="w-full pl-10 pr-12 py-2 text-base text-black border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-bold placeholder:text-black"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                                        >
                                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </div>

                                <label className="block text-sm font-bold text-slate-700 mb-1.5">Assign Role</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {["ADMIN", "MODERATOR", "STUDENT"].map((role) => (
                                        <label key={role} className="relative flex flex-col items-center gap-2 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50">
                                            <input type="radio" name="role" value={role} className="hidden" defaultChecked={role === "STUDENT"} />
                                            <Shield className="h-5 w-5 text-slate-400" />
                                            <span className="text-xs font-bold text-slate-700">{role}</span>
                                        </label>
                                    ))}
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
                                        <ShieldCheck className="h-4 w-4" />
                                    )}
                                    {isSubmitting ? "Creating..." : "Create User"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
