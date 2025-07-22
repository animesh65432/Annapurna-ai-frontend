import { z } from "zod"

export const RecipeFrom = z.object({
    dish: z.string().min(1, { message: "Dish Name is required" }),
    language: z.string().min(1, { message: "Please select any language" }),
    Nutrient: z.string(),
    DishType: z.string()
})