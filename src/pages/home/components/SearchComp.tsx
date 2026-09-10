import { Search } from "lucide-react"

interface SearchCompProps {
  busqueda: string
  setBusqueda: (valor: string) => void
  onBuscar: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchComp = ({ busqueda, setBusqueda, onBuscar }: SearchCompProps) => {
  return (
    <div className=" flex flex-col gap-4 justify-center items-center  bg-orange-300  h-50">

      <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-sm">
        Busca la receta que quieras...
      </h2>

      <div className="flex items-center  bg-white border rounded-full px-4 py-2 shadow-md">
        <Search className="w-5 h-5 text-gray-400" />
        <input 
          className="bg-white text-lg outline-none px-4  " 
          type="text" 
          placeholder="Ej: pollo, pasta, ensalada..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          onKeyDown={onBuscar}
        />
      </div>
      
    </div>
  )
}

export default SearchComp