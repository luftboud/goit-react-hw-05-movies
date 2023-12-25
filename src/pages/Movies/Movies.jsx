import { Link } from "react-router-dom";
import axios from "axios"
import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react"
import { API_KEY } from "components/App"
import css from './Movies.module.css' 
const Movies = () => {
    const [movies, setMovies] = useState({})
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query")
    const location = useLocation();
    const handleSearch = (evt) => {
        evt.preventDefault();
        const input = evt.currentTarget.elements[0];
        console.log(input.value);
        // setMovies(input.value)
        setSearchParams({query: input.value})
        evt.target.reset();
    };
    useEffect(() => {
        const FetchData = async () => {
            const response = await axios.get(
                `/search/movie?api_key=${API_KEY}&query=${query}`
            )
            console.log(response.data);
            console.log(query);
            setMovies(response.data)
        }
        if (query !== null) {
            FetchData()
            
        }
    }, [query])
    return (
        <div className={css.Container} >
            
            <h1>Movies</h1>

                <form action="submit" className={css.Form} onSubmit={handleSearch}>
                    <input type="text" />
                    <button type="submit">Search</button>
            </form>
            <ul className={css.List}>
                {
                    movies.results && movies.results.length !== 0 ? (
                        
                        movies.results.map(m => {
                                return (
                                    <li key={m.id} className="">
                                        <Link to={`/movies/${m.id}`} state={{ from: location }}>{m.title || m.name }</Link>
                                    </li>
                                )
                            }) 
                     ) : movies.results && movies.results.length === 0 ? (
                             <h3>There are no matchings to your request...</h3>
                        ) : (
                               null 
                         )
                    }
            </ul>
        </div>
    )
}
export {Movies}