
import { Route, Routes} from "react-router-dom"
import Homes from "../pages/home/Homes"
import SingleRecipe from "../pages/singleRecipe/SingleRecipe"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homes />} />
        <Route path='/recipe/:id' element={<SingleRecipe />} />
    </Routes>
  )
}

export default AppRoutes