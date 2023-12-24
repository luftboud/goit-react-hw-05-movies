import axios from "axios"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { API_KEY } from "components/App"
import css from './Reviews.module.css'
const Reviews = () => {
    const [reviews, setReviews] = useState({})
    const { movieId } = useParams();
    console.log(movieId);
    useEffect(() => {
        const FetchData = async () => {
            const response = await axios.get(
                `/movie/${movieId}/reviews?api_key=${API_KEY}`
            )
            console.log(response.data);
            setReviews(response.data)
        }
        FetchData()
    }, [movieId])
     return (
        <div className={css.Container}>   
             <h2>Reviews</h2>
             <ul className={css.List}>
                 {
                     reviews.results ? (
                        reviews.results.map(r => {
                                return (
                                    <li key={r.id} className={css.Item}>
                                        <h3>{r.author}</h3>
                                        <h4>{`@${r.author_details.username }`}</h4>
                                        <p>{r.content }</p>
                                    </li>
                                )
                            }) 
                     ) : (
                             <h3>There are no rewievs yet...</h3>
                         )
                            
                    
                    }
             </ul>
        </div>
    )
}
export {Reviews}