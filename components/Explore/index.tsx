import Header from "@/components/Header";
import SearchinInputBox from "./SearchinInputBox";
import Nonvegetarian from "./NonVeg";
import SummerDishes from "./SummerDishes";
import Veg from "./Veg";
import WinterDishes from "./WinterDishes";
import MobileSearch from "./MobileSearch";
import ShowResult from "./ShowResult";
import { useExploreContext } from "@/context";

export default function ExploreComponent() {
    const { Isfiltering } = useExploreContext()
    return (
        <div className="bg-white flex min-h-dvh overflow-y-auto w-full  flex-col  gap-5  lg:gap-8">
            <Header />
            <SearchinInputBox />
            <MobileSearch />
            {!Isfiltering &&
                <Nonvegetarian />
            }
            {!Isfiltering &&
                <Veg />
            }
            {!Isfiltering &&
                <SummerDishes />
            }
            {!Isfiltering &&
                <WinterDishes />}
            {Isfiltering && <ShowResult />}

        </div>

    );
}
