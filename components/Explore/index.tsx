'use client';
import Header from "@/components/Header";
import SearchinInputBox from "./SearchinInputBox";
import Nonvegetarian from "./NonVeg";
import SummerDishes from "./SummerDishes";
import Veg from "./Veg";
import WinterDishes from "./WinterDishes";
import MobileSearch from "./MobileSearch";

export default function ExploreComponent() {
    return (
        <div className="bg-white flex min-h-dvh overflow-y-auto w-full  flex-col  gap-5  lg:gap-8">
            <Header />
            <SearchinInputBox />
            <MobileSearch />
            <Nonvegetarian />
            <Veg />
            <SummerDishes />
            <WinterDishes />
        </div>
    );
}
