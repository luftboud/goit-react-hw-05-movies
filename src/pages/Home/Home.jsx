import axios from "axios"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { API_KEY } from "components/App"
import css from "./Home.module.css"
axios.defaults.baseURL = "https://api.themoviedb.org/3"
const Home = () => {
    const [trends, setTrends] = useState([])
    const location = useLocation();
    const FetchData = async () => {
        const response = await axios.get(
            `/trending/all/day?api_key=${API_KEY}`
        )
        console.log(response.data.results);
        setTrends(response.data.results)
    }
    useEffect(() => {
        FetchData()
    }, [])
    return (
        <div className={css.Container}>
            <h1>Trending today</h1>
            <div >
                <ul className={css.List}>
                {trends.map(el => {
                    return(<li key={el.id} className={css.Item}>
                        <Link to={`/movies/${el.id}`} state={{ from: location }}>{el.title || el.name }</Link>
                    </li>)
                })}

                </ul>
            </div>
        </div>
    )
}
export {Home}