import { ChefHat, Star } from "lucide-react"

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-orange-500">
        
      <ChefHat className="w-8 h-8 text-white" />
      
      <h1 className="text-bold text-3xl text-white" >
          <span className="font-bold ">Los Mejores </span>
          <span className="font-bold ">Sabores</span>
      </h1>

      <nav>
        <a 
          href="#" 
          className=" flex gap-2 items-center text-white font-medium hover:text-orange-200 transition-colors"
        >
          <Star className="w-5 h-5" />
          Favoritos
        </a>
      </nav>

    </header>
  )
}

export default Header