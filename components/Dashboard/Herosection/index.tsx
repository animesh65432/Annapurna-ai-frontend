import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image";
import { DishType, micronutrientIcons, optionsforLanguages } from "@/lib/Herosectiondata"

export default function Herosection() {
    return (
        <div className="bg-[url('/dashboard/Hero.png')] bg-cover bg-center bg-[#F5EFD8] ml-auto mr-auto w-[90%] sm:w-[80%] md:w-[670px] lg:w-[737px] h-[54vh] sm:h-[50vh] md:h-[290px] lg:h-[296px] rounded-2xl p-5 md:p-14 lg:p-8 flex flex-col gap-6">
            <div className="relative flex flex-col gap-3 md:gap-2">
                <div className=" h-10  w-10 sm:h-8 sm:w-8 absolute left-[50%]  md:top-[-24px] lg:top-[-13px]  md:left-[99%] lg:left-[91%] ">
                    <Image src="/assets/dashboard/star.svg" alt="Star Icon" fill />
                </div>
                <h1 className="text-[#414141] text-center text-[1.6rem] [@media(min-width:321px)]:text-[1.7rem]  [@media(min-width:372px)]:text-[1.9rem] sm:text-3xl md:text-[1.8rem] lg:text-3xl mt-9 md:mt-0 leading-snug">
                    Amp your recipes
                    <br className="block md:hidden" />
                    <span className="block md:inline mt-2 md:mt-0">
                        <span className="ml-2">With</span>
                        <span className="text-[#168B5D]"> Healthy twists</span>
                    </span>
                </h1>

                <div className="text-[#535353] text-center">Generate AI Powered Recipes
                    <br className="sm:hidden block " />
                    <span className="sm:ml-1 ml-0">
                        Just One Click!</span>
                </div>
            </div>
            <div className="flex flex-col gap-4  w-[90%] md:max-w-[478px] mx-auto">
                <div className="flex gap-4">
                    <Input className="bg-white w-[100%] md:w-[380px] lg:w-[341px]" />
                    <Button className="bg-[#FFD059] hidden md:block hover:bg-[#f6d47e] text-[#404040] lg:max-w-[121px]">See Recipe</Button>
                </div>
                <div className="flex gap-2  md:gap-4 justify-center md:justify-start">
                    <Select >
                        <SelectTrigger className=" bg-white text-[#4A4A4A] ">
                            <SelectValue placeholder="Diet Type" />
                        </SelectTrigger>
                        <SelectContent className="">
                            {DishType.map((dish) => (
                                <SelectItem key={dish.value} value={dish.value}>{dish.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select >
                        <SelectTrigger className=" bg-white text-[#4A4A4A] ">
                            <SelectValue placeholder="Nutrient Focus" />
                        </SelectTrigger>
                        <SelectContent className="">
                            {micronutrientIcons.map((micronutrient) => (
                                <SelectItem key={micronutrient.label} value={micronutrient.label}>{micronutrient.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className=" bg-white text-[#4A4A4A] ">
                            <SelectValue placeholder="Nutrient Focus" />
                        </SelectTrigger>
                        <SelectContent className="">
                            {optionsforLanguages.map((Language) => (
                                <SelectItem key={Language.label} value={Language.label}>{Language.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Button className="bg-[#FFD059]  ml-auto mr-auto block md:hidden hover:bg-[#f6d47e] text-[#404040] lg:max-w-[121px]">See Recipe</Button>
        </div>
    )
}
