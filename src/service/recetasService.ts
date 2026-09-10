import type { CategoryResponse, MealResponse } from "../module/recetas"

const SEARCH_API = 'https://www.themealdb.com/api/json/v1/1/search.php'

export const getRecipeByLetter = async (letra: string) => {
    const response  = await fetch(`${SEARCH_API}?f=${letra}`)
    const data = await response.json() as MealResponse

    return data.meals
}

const CATEGORY_LIST_API = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'

export const getCategory = async () => {
    const response = await fetch(CATEGORY_LIST_API)
    const data = await response.json() as CategoryResponse

    return data.meals
}

const LOOKUP_API = 'https://www.themealdb.com/api/json/v1/1/lookup.php'

export const getRecipeById = async (id: string) => {
    const response = await fetch(`${LOOKUP_API}?i=${id}`)
    const data = await response.json() as MealResponse
    
    return  data.meals?.[0]
}

const CATEGORY_RECIPE_API = 'https://www.themealdb.com/api/json/v1/1/filter.php'

export const getCategoryRecipe = async (category: string) => {
    const response = await fetch(`${CATEGORY_RECIPE_API}?c=${category}`)
    const data = await response.json() as MealResponse
    return data.meals
}

export const getRecipeByName = async (name: string) => {
    const response = await fetch(`${SEARCH_API}?s=${name}`)
    const data = await response.json() as MealResponse
    return data.meals
}