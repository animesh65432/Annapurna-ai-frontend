"use client"
import Header from "@/components/Dashboard/Header"
import Herosection from "./Herosection"
import TrendingRecipes from "./Trendingrecipes"
import Discover from "./Discover"
import MobileTrendingRecipes from "./MobileTrendingRecipes"
export default function Dashboard() {
    return (
        <div className="bg-[url('/dashboard/backgroundimage.png')] min-h-dvh overflow-y-auto w-full flex flex-col xl:justify-around gap-5 xl:gap-0 pb-0 xl:pb-4">
            <Header />
            <Herosection />
            <TrendingRecipes />
            <Discover />
            <MobileTrendingRecipes />
        </div>
    )
}
