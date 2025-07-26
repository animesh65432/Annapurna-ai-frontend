import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Header() {

    return (
        <header className="ml-auto mr-auto pt-5 flex justify-between items-center w-[85%]  ">
            <Link href="/">
                <ul >
                    <Image src="/assets/Icon.svg" alt="Logo" width={200} height={200} />
                </ul>
            </Link>
            <ul className=" hidden md:flex gap-8 items-center text-[1rem] ">
                <Link href="/Explore">
                    <li className="text-[#353535]">Explore</li>
                </Link>
                <li className="text-[#353535]">Save</li>
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
                            <Link href="/Explore">
                                <ul>Explore</ul>
                            </Link>
                            <ul>Save</ul>
                        </nav>
                    </SheetContent>
                </Sheet>

            </ul>
        </header>
    );
}
