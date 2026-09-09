export interface Meal{
    idMeal: string
    strMeal: string
    strCategory: string
    strMealThumb: string
}

export interface MealResponse {
    meals: Meal[] | null
}

export interface Category {
    strCategory: string
}

export interface CategoryResponse{
    meals: Category[]
}