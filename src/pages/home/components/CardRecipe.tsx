import { useNavigate } from "react-router-dom"

interface CardRecipeProps {
  id?: string
  nombre?: string
  categoria?: string
  imagen?: string
}

const CardRecipe = ({id, nombre, categoria, imagen} : CardRecipeProps) => {

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
        <button onClick={irADetalle} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer mt-auto">
          Ver info
        </button>
      </div>
    </div>
  )
}

export default CardRecipe