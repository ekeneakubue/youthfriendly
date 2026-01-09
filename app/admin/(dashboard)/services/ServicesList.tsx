"use client";

import { useState } from "react";
import { createService, getServices, deleteService, updateService } from "@/lib/actions/services";
import {
    Plus,
    Edit2,
    Trash2,
    AlertCircle,
    X,
    Save,
    Loader2,
    CheckCircle2
} from "lucide-react";

interface Service {
    id: string;
    title: string;
    description: string;
    status: "ACTIVE" | "DRAFT" | "HIDDEN";
    category: "HEALTH" | "EDUCATION" | "WELFARE" | "SKILLS";
    updatedAt: Date | string;
}

interface ServicesListProps {
    initialServices: Service[];
}

export default function ServicesList({ initialServices }: ServicesListProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [services, setServices] = useState<Service[]>(initialServices);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loadingId, setLoadingId] = useState<string | null>(null);
    const [editingService, setEditingService] = useState<Service | null>(null);

    const fetchServices = async () => {
        try {
            const data = await getServices();
            setServices(data);
        } catch (error) {
            console.error("Failed to fetch services:", error);
        }
    };

    const handleOpenModal = (service: Service | null = null) => {
        setEditingService(service);
        setIsModalOpen(true);
    };

    const handleEdit = (service: Service) => {
        setLoadingId(service.id);
        // Brief artificial delay to show feedback as requested
        setTimeout(() => {
            handleOpenModal(service);
            setLoadingId(null);
        }, 300);
    };

    const handleCloseModal = () => {
        setEditingService(null);
        setIsSubmitting(false);
        setIsModalOpen(false);
    };

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        try {
            if (editingService) {
                await updateService(editingService.id, formData);
            } else {
                await createService(formData);
            }
            await fetchServices();
            handleCloseModal();
        } catch (error) {
            console.error("Failed to save service:", error);
            alert("Error saving service. Please try again.");
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id: string, title: string) => {
        if (confirm(`Are you sure you want to delete "${title}"?`)) {
            setLoadingId(id);
            try {
                await deleteService(id);
                await fetchServices();
            } catch (error) {
                console.error("Failed to delete service:", error);
                alert("Error deleting service. Please try again.");
            } finally {
                setLoadingId(null);
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Program Services</h1>
                    <p className="text-slate-900 font-medium">Manage the core programs and offerings visible on the home page.</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200"
                >
                    <Plus className="h-4 w-4" />
                    Create Service
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service: Service) => (
                    <div key={service.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => handleEdit(service)}
                                    disabled={loadingId === service.id}
                                    className="p-2 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 disabled:opacity-50"
                                >
                                    {loadingId === service.id ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <Edit2 className="h-4 w-4" />
                                    )}
                                </button>
                                <button
                                    onClick={() => handleDelete(service.id, service.title)}
                                    disabled={loadingId === service.id}
                                    className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 disabled:opacity-50"
                                >
                                    {loadingId === service.id ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <Trash2 className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-1 block">
                                {service.category}
                            </span>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                            <p className="text-sm text-slate-900 font-bold line-clamp-3 leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <div className={`h-1.5 w-1.5 rounded-full ${service.status === "ACTIVE" ? "bg-emerald-500" : "bg-amber-500"}`} />
                                <span className="text-xs font-bold text-slate-900 uppercase">{service.status}</span>
                            </div>
                            <span className="text-[10px] text-slate-900 font-bold italic">
                                {new Date(service.updatedAt).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                ))}

                <button
                    onClick={() => handleOpenModal()}
                    className="h-full min-h-[200px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all group"
                >
                    <div className="p-3 bg-slate-50 rounded-full text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                        <Plus className="h-6 w-6" />
                    </div>
                    <p className="mt-3 text-sm font-bold text-slate-800 group-hover:text-emerald-700">Add New Program</p>
                </button>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-start gap-4">
                <div className="p-2 bg-amber-100 text-amber-700 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-amber-900">Website Sync Notice</h4>
                    <p className="text-xs text-amber-700 mt-0.5">
                        Changes made here will reflect immediately on the landing page services section. Ensure content is reviewed before saving.
                    </p>
                </div>
            </div>

            {/* Service Modal (Create/Edit) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={handleCloseModal} />
                    <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">
                                    {editingService ? "Edit Service" : "Add New Service"}
                                </h2>
                                <p className="text-sm text-slate-500">
                                    {editingService ? "Update program details." : "Create a new program offering for students."}
                                </p>
                            </div>
                            <button
                                onClick={handleCloseModal}
                                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form
                            className="p-8 space-y-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                handleSubmit(formData);
                            }}
                        >
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Service Title</label>
                                    <input
                                        name="title"
                                        type="text"
                                        required
                                        defaultValue={editingService?.title || ""}
                                        placeholder="e.g. Mental Health Support"
                                        className="w-full px-4 py-2 text-base text-black border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-bold placeholder:text-black"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Category</label>
                                        <select
                                            name="category"
                                            defaultValue={editingService?.category || "HEALTH"}
                                            className="w-full px-4 py-2 text-base text-black border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all bg-white font-bold"
                                        >
                                            <option value="HEALTH">Health</option>
                                            <option value="EDUCATION">Education</option>
                                            <option value="WELFARE">Welfare</option>
                                            <option value="SKILLS">Skills</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Initial Status</label>
                                        <select
                                            name="status"
                                            defaultValue={editingService?.status || "ACTIVE"}
                                            className="w-full px-4 py-2 text-base text-black border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all bg-white font-bold"
                                        >
                                            <option value="ACTIVE">Active</option>
                                            <option value="DRAFT">Draft</option>
                                            <option value="HIDDEN">Hidden</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Description</label>
                                    <textarea
                                        name="description"
                                        rows={4}
                                        required
                                        defaultValue={editingService?.description || ""}
                                        placeholder="Briefly describe the program and its benefits..."
                                        className="w-full px-4 py-2 text-base text-black border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all resize-none font-bold placeholder:text-black"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="flex-1 px-4 py-2.5 text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                                >
                                    Discard
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            {editingService ? "Saving..." : "Publishing..."}
                                        </>
                                    ) : (
                                        <>
                                            <Save className="h-4 w-4" />
                                            {editingService ? "Save Changes" : "Publish Service"}
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
