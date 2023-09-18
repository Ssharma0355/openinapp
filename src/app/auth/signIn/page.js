import LeftPanel from "@/components/LeftPanel"
import LoginForm from "@/components/LoginForm"

export default function Home() {
    return (
        <main className="flex">
            <LeftPanel />
            <LoginForm />
        </main>
    )
}