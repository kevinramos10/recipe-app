import { useEffect, useState } from "react"
import Header from "../../shared/components/header/Header"
import CardRecipe from "./components/CardRecipe"
import FiltroCategory from "./components/FiltroCategory"
import SearchComp from "./components/SearchComp"
import type { Category, Meal } from "../../module/recetas"
import { getCategory, getCategoryRecipe, getRecipeByLetter, getRecipeByName } from "../../service/recetasService"


const Homes = () => {

  const [recetas, setRecetas] = useState<Meal[]>([])

  const [categorias, setCategorias] = useState<Category[]>([])

  const [categoriaActiva, setCategoriaActiva] = useState<string | null>(null)

  const [busqueda, setBusqueda] = useState('')


  // Para montar todas las recetas
  useEffect(() => {
    const cargarRecetas = async () => {
      const data = await getRecipeByLetter('a')
      setRecetas(data ?? [])
    }
    cargarRecetas()
  }, [])

  // Para montar categorias
  useEffect(() => {
    const cargarCategorias = async () => {
      const data = await getCategory()
      setCategorias(data ?? [])
    }
    cargarCategorias()
  }, [])

  // Para montar las recetas segun la categoria seleccionada
  useEffect(() => {
    if(!categoriaActiva) return

    const cargarRecipeCategorias = async () => {
      const data = await getCategoryRecipe(categoriaActiva)
      setRecetas(data ?? [])

    }
    cargarRecipeCategorias()

  }, [categoriaActiva])

  const manejarTecla = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cargarPorNombre = async () => {
        const data = await getRecipeByName(busqueda)
        setRecetas(data ?? [])
      }

      cargarPorNombre()
    }
  }



  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <SearchComp
        busqueda = {busqueda}
        setBusqueda = {setBusqueda}
        onBuscar = {manejarTecla}
      />
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
              id={receta.idMeal}
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
