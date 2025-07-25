type Props = {
    name: string,
    variant: string[],
    img: string
}
import Image from "next/image"
export default function Dish({ name, variant, img }: Props) {
    return (
        <div className=" w-[30vw] h-[25vh] sm:h-[34vh] md:w-[25vw] md:h-[32vh] lg:w-[185px] lg:h-[217px] flex flex-col gap-2">
            <div className="relative w-full h-[80%] overflow-hidden rounded-md p-0">
                <Image src={img} fill alt="dish" />
            </div>
            <div className="text-[#434343]  text-[0.9rem] sm:text-[1rem] whitespace-nowrap">
                {name}
            </div>
        </div>
    )
}
