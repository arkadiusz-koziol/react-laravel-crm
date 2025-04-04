import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DashboardBox from "@/Components/DashboardBox.jsx";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
                            <Link href="/users">
                                <DashboardBox className="col-span-1">
                                    Użytkownicy
                                </DashboardBox>
                            </Link>
                            <Link href="/settings">
                                <DashboardBox className="col-span-1">
                                    Ustawienia
                                </DashboardBox>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
