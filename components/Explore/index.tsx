'use client';
import Header from "@/components/Header";
import Nonvegetarian from "./NonVeg";
import SummerDishes from "./SummerDishes";
import Veg from "./Veg";
import WinterDishes from "./WinterDishes";

export default function ExploreComponent() {
    return (
        <div className="flex min-h-dvh overflow-y-auto w-full  flex-col  gap-5  lg:gap-8">
            <Header />
            <Nonvegetarian />
            <Veg />
            <SummerDishes />
            <WinterDishes />
        </div>
    );
}
