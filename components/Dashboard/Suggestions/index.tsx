import { UseFormSetValue } from "react-hook-form";
import { RecipeFromTypes } from "../Herosection"
type Props = {
    suggestions: string[];
    setValue: UseFormSetValue<RecipeFromTypes>
}
export default function Suggestions({ suggestions, setValue }: Props) {
    if (suggestions.length === 5) {
        return
    }
    return (
        <div className="absolute z-50 left-1 sm:left-1 md:left-7 lg:left-2 top-10 bg-white shadow-md rounded-md w-[100%] sm:w-[100%] md:w-[300px] lg:w-[341px]">
            {suggestions.map((suggestion, index) => (
                <div key={index} className="text-[#4A4A4A] px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => setValue("dish", suggestion)}>
                    {suggestion}
                </div>
            ))}
        </div>

    )
}
