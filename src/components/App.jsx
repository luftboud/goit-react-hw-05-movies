import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
//  components:
const Home = lazy(() => import("../pages/Home/Home"))
const Movies = lazy(() => import("../pages/Movies/Movies"))
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"))
const Cast = lazy(() => import("../pages/Cast/Cast"))
const Reviews = lazy(() => import("../pages/Reviews/Reviews"))
const HeaderLayout = lazy(() => import("./Layers/HeaderLayout/HeaderLayout"))
// import { Movies } from "../pages/Movies/Movies";
// import { MovieDetails } from "../pages/MovieDetails/MovieDetails";
// import { Cast } from "../pages/Cast/Cast";
// import { Reviews } from "../pages/Reviews/Reviews";
// import { HeaderLayout } from "./Layers/HeaderLayout/HeaderLayout";
// const URL = "https://api.themoviedb.org/3" 
const API_KEY = "e25fb89da0bb21bc1fd9074e0857c690"
const App = () => {
  return (
    <div>


      <Routes>
    <Route path="/" element={<HeaderLayout />}>
      <Route index element={<Home />} />
      <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        
      </Route> 

        </Route>
      
    </Routes>
  </div>
  
    );
  
};
export { App, API_KEY }
//  API Key: 52aed080f92e177ae510784bfb4b51ec
//https://api.themoviedb.org/3/