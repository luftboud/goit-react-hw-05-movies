import axios from "axios"
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react"
import { API_KEY } from "components/App"
import css from "./MovieDetails.module.css"
const MovieDetails = () => {
    const [movie, setMovie] = useState({})
    const { movieId } = useParams();
    const location = useLocation();
    console.log(location);
    const backLinkHref = location.state?.from ?? "/";
    console.log(movieId);

    useEffect(() => {
        const FetchData = async () => {
            const response = await axios.get(
                `/movie/${movieId}?api_key=${API_KEY}`
            )
            console.log(response.data);
            setMovie(response.data)
        }
        FetchData()
    }, [movieId])
    return (
        
        <div className={css.Container}>
            {/* <button></button> */}
            <Link to={backLinkHref}>Back</Link>
            <div className={css.MainInfo}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                <div>
                    <h1>{movie.title}</h1>
                    <p><i>{movie.tagline}</i></p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <ul className={css.List}>
                        {
                            movie.genres?.map(m => {
                                return (<li key={m.id}>{m.name}</li>
                                )
                            }) 
                    
                    }
                    </ul>
                    
                </div>
            </div>
            <div className={css.AddInfo}>
                <p>Additional info</p>
                <ul className={css.List}>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

            </div>
            
        
    )
}
export default  MovieDetails 
