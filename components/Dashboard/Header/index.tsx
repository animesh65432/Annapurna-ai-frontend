import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { XIcon } from "lucide-react";
import Image from "next/image";



export default function Header() {
    return (
        <header className="ml-auto mr-auto pt-5 flex justify-between items-center w-[80%]  md:max-w-[75%] lg:max-w-[740px] xl:max-w-[1120px]">
            <ul >
                <Image src="/assets/Icon.svg" alt="Logo" width={200} height={200} />
            </ul>
            <ul className=" hidden md:flex gap-8 items-center text-[1rem] ">
                <li className="text-[#353535]">Help</li>
                <li className="text-[#353535]">Account</li>
                <li className="text-[#353535]">Upload Recipe</li>
            </ul>
            <ul className="md:hidden block">
                <Sheet>
                    <SheetTrigger>
                        <div className="relative w-8 h-8">
                            <Image
                                src="/assets/dashboard/menu.svg"
                                alt="Menu Icon"
                                className="w-full h-full object-cover"
                                fill
                            />
                        </div>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col gap-4 p-6">
                        <SheetClose asChild>
                            <XIcon className="size-8 text-[#048452] ml-auto " />
                        </SheetClose>
                        <nav className="flex  font-poppins text-[1rem] text-[#048452] font-medium flex-col justify-center items-center gap-8">
                            <ul className="font-poppins">Help</ul>
                            <ul>Account</ul>
                            <ul>Upload Recipe</ul>
                        </nav>
                    </SheetContent>
                </Sheet>

            </ul>
        </header>
    );
}
