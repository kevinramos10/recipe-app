import { useParams } from "react-router-dom"
import Header from "../../shared/components/header/Header"
import { useEffect, useState } from "react"
import type { Meal } from "../../module/recetas"
import { getRecipeById } from "../../service/recetasService"
import { Heart } from "lucide-react"
import useFavoritosStore from "../../shared/store/useFavoritosStore"

const SingleRecipe = () => {

  const { id } = useParams()

  const [receta, setReceta] = useState<Meal | null>(null)

  const { agregarFavorito, quitarFavorito, esFavorito } = useFavoritosStore()

  useEffect(() => {
    const cargarReceta = async () => {
      if (!id) return

      const data = await getRecipeById(id)
      setReceta(data ?? null)
    }

    cargarReceta()

  }, [id])

  if (!receta) return <p>Cargando...</p>

  const ingredientes = []
  for(let i = 1; i <= 20; i++) {
    const ingrediente = receta[`strIngredient${i}`]
    const medida = receta[`strMeasure${i}`]

    if (ingrediente && ingrediente.trim() !== ''){
      ingredientes.push({ingrediente, medida})
    }
    
  }

  

  const favorito = esFavorito(id ?? '')

  const manejarFavorito = () => {

    if (favorito){
      quitarFavorito(id ?? '')
    } else{
      agregarFavorito({
        idMeal: receta.idMeal ?? '',
        strMeal: receta.strMeal ?? '',
        strCategory: receta.strCategory ?? '',
        strMealThumb: receta.strMealThumb ?? ''
      })
    }

  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">

        <div className="bg-blue-200 flex-1 flex flex-col items-center " >

          <h1 className="text-[30px] font-bold m-0 self-start ml-33 mb-3 mt-20">
            {receta.strMeal}
          </h1>
          
          <img 
            src={receta.strMealThumb}
            alt={receta.strMeal}
            className="rounded-lg w-130 self-start ml-33"
          />

          <div className="flex self-start ">
            <p className="bg-green-400 text-lg font-bold text-white rounded-2xl text-center px-4 py-2 mt-5 ml-33 text-shadow-lg text-shadow-black/50" >
              {receta.strCategory}
            </p>

            <Heart 
            onClick={manejarFavorito}
            className={`w-11 h-10 cursor-pointer ${favorito ? 'text-red-500 fill-red-500' : 'text-red-500 fill-none'}`}/>
            
          </div>
          
        </div>

        <div className="bg-red-200 flex-1 flex justify-start items-start p-10 gap-10" >

          <div className="p-8 border-3 rounded-2xl border-emerald-700 flex flex-col gap-2 w-96" >
            <h2 className="font-bold text-2xl">Ingredientes:</h2>
            <ul className="list-disc pl-8 text-2xl">
              {ingredientes.map((item, index) => (
                <li key={index} className="whitespace-nowrap">
                  {item.ingrediente} <span>{item.medida}</span>
                </li>
              ))}
            </ul>            
          </div>
          
          <div className="border-2 rounded-3xl flex-1 flex p-8 flex-col gap-2">

            <h2 className="font-bold text-2xl" >Preparacion:</h2>

            <p className="text-[17px]">
              {receta.strInstructions}
            </p>

          </div>

        </div>

      </div>

      <div>

      </div>

    </div>
  )
}

export default SingleRecipe