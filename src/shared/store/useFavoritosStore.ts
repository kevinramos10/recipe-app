import { create } from 'zustand'
import type { Meal } from "../../module/recetas"

interface FavoritosStore {
    favoritos: Meal[]
    agregarFavorito: (receta: Meal) => void
    quitarFavorito: (id: string) => void
    esFavorito: (id: string) => boolean

}

const useFavoritosStore = create<FavoritosStore>((set, get) => ({
    favoritos: [],

    agregarFavorito: (receta) => {
        const { favoritos } = get()
        set({ favoritos: [...favoritos, receta] })
    },

    quitarFavorito: (id) => {
        const { favoritos } = get()
        set({favoritos: favoritos.filter((f) => f.idMeal !== id)})
    },

    esFavorito: (id) => {
        const { favoritos } = get()
        return favoritos.some((f) => f.idMeal === id)
    },

}))



export default useFavoritosStore

