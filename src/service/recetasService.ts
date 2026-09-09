import type { CategoryResponse, MealResponse } from "../module/recetas"

const SEARCH_API = 'https://www.themealdb.com/api/json/v1/1/search.php'

export const getRecipeByLetter = async (letra: string) => {
    const response  = await fetch(`${SEARCH_API}?f=${letra}`)
    const data = await response.json() as MealResponse

    return data.meals
}

const CATEGORY_API = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'

export const getCategory = async () => {
    const response = await fetch(CATEGORY_API)
    const data = await response.json() as CategoryResponse

    return data.meals
}