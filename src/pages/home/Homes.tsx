import { useEffect, useState } from "react"
import Header from "../../shared/components/header/Header"
import CardRecipe from "./components/CardRecipe"
import FiltroCategory from "./components/FiltroCategory"
import SearchComp from "./components/SearchComp"
import type { Category, Meal } from "../../module/recetas"
import { getCategory, getRecipeByLetter } from "../../service/recetasService"


const Homes = () => {

  const [recetas, setRecetas] = useState<Meal[]>([])

  const [categorias, setCategorias] = useState<Category[]>([])

  const [categoriaActiva, setCategoriaActiva] = useState<String | null>(null)

  useEffect(() => {
    const cargarRecetas = async () => {
      const data = await getRecipeByLetter('a')
      setRecetas(data ?? [])
    }
    cargarRecetas()

    const cargarCategorias = async () => {
      const data = await getCategory()
      setCategorias(data ?? [])
    }
    cargarCategorias()

  }, [])

  console.log(categorias)


  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <SearchComp />
      <div className="flex flex-1">
        <div className='bg-orange-300 w-90'>
          <div className="p-4">
            <p className="font-bold text-white mb-2 text-3xl">Categorias</p>
            <div className="flex flex-col gap-2">
              {categorias.map((c) => (
                <FiltroCategory 
                  key={c.strCategory}
                  categoria={c.strCategory}
                  estaActiva = {categoriaActiva === c.strCategory}
                  onClick = {() => setCategoriaActiva(c.strCategory)}
                />
              ))}
            </div>
          </div>
        </div>
        

        <div className="grid grid-cols-5 gap-6 w-full px-10 py-10">
          {recetas.map((receta) => (
            <CardRecipe 
              key={receta.idMeal}
              nombre={receta.strMeal}
              categoria={receta.strCategory}
              imagen={receta.strMealThumb}
            />
          ))}
        </div>

        
      </div>
    </div>
  )
}

export default Homes
