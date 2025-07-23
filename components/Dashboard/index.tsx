"use client"
import Header from "./Header"
import Herosection from "./Herosection"
import TrendingRecipes from "./Trendingrecipes"
import Discover from "./Discover"
import MobileTrendingRecipes from "./MobileTrendingRecipes"
export default function Dashboard() {
    return (
        <div className="bg-[url('/dashboard/backgroundimage.png')] min-h-dvh overflow-y-auto w-full flex flex-col gap-5 sm:gap-7">
            <Header />
            <Herosection />
            <TrendingRecipes />
            <Discover />
            <MobileTrendingRecipes />
        </div>
    )
}
