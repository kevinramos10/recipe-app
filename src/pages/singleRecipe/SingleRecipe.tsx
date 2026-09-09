import Header from "../../shared/components/header/Header"

const SingleRecipe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">

        <div className="bg-blue-200 flex-1 flex flex-col items-center " >

          <h1 className="text-[30px] font-bold m-0 self-start ml-33 mb-3 mt-20">
            Teriyaki Chicken Casserole
          </h1>
          
          <img 
            src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg" 
            alt="Teriyaki Chicken Casserole"
            className="rounded-lg w-130 self-start ml-33"
          />

          <p className="bg-green-400 text-lg font-bold text-white rounded-2xl text-center px-4 py-2 self-start mt-5 ml-33 text-shadow-lg text-shadow-black/50" >Chicken</p>
        </div>

        <div className="bg-red-200 flex-1 flex justify-start items-start p-10 gap-10" >

          <div className="p-8 border-3 rounded-2xl border-emerald-700 flex flex-col gap-2 w-96" >
            <h2 className="font-bold text-2xl">Ingredientes:</h2>
            <ul className="list-disc pl-8 text-2xl">
              <li className="whitespace-nowrap">soy sauce <span>3/4 cup</span> </li>
              <li className="whitespace-nowrap">brown sugar <span>1/2 cup</span> </li>
              <li className="whitespace-nowrap">ground ginger <span>1/4 cup</span> </li>
              <li className="whitespace-nowrap">minced garlic <span>1/2 teaspoon</span> </li>
              <li className="whitespace-nowrap">cornstarch <span>1 (12 oz.)</span> </li>
              <li className="whitespace-nowrap">chicken breasts <span>3 cups</span> </li>
            </ul>            
          </div>
          
          <div className="border-2 rounded-3xl flex-1 flex p-8 flex-col gap-2">

            <h2 className="font-bold text-2xl" >Preparacion:</h2>

            <p className="text-[17px]">
              Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!
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