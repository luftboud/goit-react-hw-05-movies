import axios from "axios"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { API_KEY } from "components/App"
import css from "./Cast.module.css"
 const Cast = () => {
    const [cast, setCast] = useState({})
    const { movieId } = useParams();
    console.log(movieId);
    useEffect(() => {
        const FetchData = async () => {
            const response = await axios.get(
                `/movie/${movieId}/credits?api_key=${API_KEY}`
            )
            console.log(response.data);
            setCast(response.data)
        }
        FetchData()
    }, [movieId])
     return (
        <div className={css.Container}> 
             <h2>Cast</h2>
             <ul className={css.List}>
                 {
                      cast.cast && cast.cast.length !== 0 ? (
                        cast.cast?.map(c => {
                                return (<li key={c.id} className={css.Item}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${c.profile_path}`} alt={`${c.name} pic`} />
                                    <p>{c.name}</p>
                                    <p className={css.Char}>{c.character}</p>
                                    </li>
                                )
                            }) 
                     ) : (
                             <h3>There is no info about cast yet...</h3>
                         )
                            
                    
                    }
                    </ul>
        </div>
    )
}
export default Cast 
