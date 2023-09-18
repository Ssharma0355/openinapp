

"use client";
import NavPanel from "@/components/NavPanel";
import Dashboard from "@/components/Dashboard";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === 'unauthenticated') {
            router.replace('/auth');
        }

    }, [status, router])
    return (
        <main className="flex">
            <div className="w-1/5 pr-5 sticky">
                <NavPanel />
            </div>
            <div className="w-4/5 overflow-auto">
                <Dashboard />
            </div>
        </main>
    )
}