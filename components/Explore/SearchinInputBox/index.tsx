import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DishTypeOptions, micronutrientIcons } from "@/lib/Herosectiondata"
import InputIcon from "@/public/assets/dashboard/Vector.svg"
import Image from "next/image"
import { Search } from "lucide-react"

export default function SearchinInputBox() {

    return (
        <div className="w-full flex justify-center ">
            <div className=" hidden md:flex  rounded-4xl h-[8vh] items-center w-[75%] lg:w-[63%] xl:w-[55%] bg-white shadow-md border-2 border-neutral-100 text-black">
                <Image src={InputIcon} alt="inputicon" className="w-[2vw] h-[3vh] ml-5" />
                <Input className="border-0 bg-transparent shadow-none  w-[40%] lg:w-[45%] " placeholder="Write Dish name" />
                <Select >
                    <SelectTrigger className="border-t-0 border-r-0 border-b-0  bg-transparent shadow-none w-[20%]">
                        <SelectValue placeholder="Diet Type" />
                    </SelectTrigger>
                    <SelectContent >
                        {DishTypeOptions.map((dish) => (
                            <SelectItem key={dish.value} value={dish.value}>{dish.label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select >
                    <SelectTrigger className="border-t-0 border-r-0 border-b-0 rounded-0 bg-transparent shadow-none w-[20%]">
                        <SelectValue placeholder="Nutrient Focus" />
                    </SelectTrigger>
                    <SelectContent className="">
                        {micronutrientIcons.map((micronutrient) => (
                            <SelectItem key={micronutrient.label} value={micronutrient.label}>{micronutrient.label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <div className="flex ml-[5%] lg:ml-[2%] bg-[#168B5D] text-white rounded-3xl p-2">
                    <Search />
                </div>
            </div>
        </div>
    )
}
