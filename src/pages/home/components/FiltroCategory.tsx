
interface CategoryProps{
  categoria?: string
  estaActiva?: boolean
  onClick?: () => void
}

const FiltroCategory = ({categoria, estaActiva, onClick} : CategoryProps) => {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-center cursor-pointer transition-colors ${
        estaActiva ? 'bg-orange-600 text-white' : 'bg-white text-gray-700'
      }`}
    >
      {categoria}
    </button>
  )
}

export default FiltroCategory