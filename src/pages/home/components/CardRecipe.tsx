import { Heart } from "lucide-react"
import { useNavigate } from "react-router-dom"
import useFavoritosStore from "../../../shared/store/useFavoritosStore"

interface CardRecipeProps {
  id?: string
  nombre?: string
  categoria?: string
  imagen?: string
}

const CardRecipe = ({id, nombre, categoria, imagen} : CardRecipeProps) => {

  const { agregarFavorito, quitarFavorito, esFavorito } = useFavoritosStore()

  const favorito = esFavorito(id ?? '')

  const manejarFavorito = () => {
    if (favorito){
      quitarFavorito(id ?? '')
    } else {
      agregarFavorito({
        idMeal: id ?? '',
        strMeal: nombre ?? '',
        strCategory: categoria ?? '',
        strMealThumb: imagen ?? ''
      })
    }

  }


  const navigate = useNavigate()
  const irADetalle = () => {
    navigate(`/recipe/${id}`)
  }

  

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
      
      <div className="h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={imagen} alt={nombre} />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h2 className="font-bold text-xl mb-2 line-clamp-1">{nombre}</h2>
        <p className="text-sm text-gray-600 mb-4">{categoria}</p>

        <div className="flex gap-2 items-center">
          <button onClick={irADetalle} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer mt-auto text-xl" >
            Ver info
          </button>
          <Heart 
          onClick={manejarFavorito}
          className={`w-11 h-10 cursor-pointer ${favorito ? 'text-red-500 fill-red-500' : 'text-red-500 fill-none'}`}/>
        </div>        
      </div>

    </div>
  )
}

export default CardRecipe