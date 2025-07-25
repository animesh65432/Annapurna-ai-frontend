type Props = {
    name: string,
    variant: string[],
    img: string
}
import Image from "next/image"
export default function Dish({ name, variant, img }: Props) {
    console.log(variant.join(", "))
    return (
        <div className=" w-[33vw] h-[20vh] sm:h-[34vh] md:w-[25vw] md:h-[32vh] lg:w-[185px] lg:h-[217px] flex flex-col gap-2">
            <div className="relative w-full h-[80%] overflow-hidden rounded-md p-0 text-[0.7rem] sm:text-[0.9rem]">
                <div className="text-[#168B5D] bg-[#FFFFFF] absolute z-50 top-[10%] left-[5%] p-1 rounded-md">{variant.join(", ")}</div>
                <Image src={img} fill alt="dish" />
            </div>
            <div className="text-[#434343]  text-[0.9rem] sm:text-[1rem] whitespace-nowrap">
                {name}
            </div>
        </div>
    )
}
