import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { Select } from "@radix-ui/react-select";

export default function Herosection() {
    return (
        <div className="bg-[url('/dashboard/Hero.png')] bg-cover bg-center bg-[#F5EFD8] ml-auto mr-auto xl:w-[737px] xl:h-[296px] rounded-2xl ">
            <div>
                <div>Amp your recipes with healthy twists</div>
                <div>Generate AI Powered Recipes Just One Click!</div>
            </div>
            <div>
                <div>
                    <Input />
                    <Button></Button>
                </div>
                <div>
                    <Select />
                    <Select />
                    <Select />
                </div>
            </div>
        </div>
    )
}
