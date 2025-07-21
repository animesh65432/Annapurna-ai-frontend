import Header from "./Header"
import Herosection from "./Herosection"
export default function Dashboard() {
    return (
        <div className="bg-[url('/dashboard/backgroundimage.png')] min-h-dvh w-full flex flex-col gap-10">
            <Header />
            <Herosection />
        </div>
    )
}
