import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { API_KEY } from "components/App"
import css from "./Home.module.css"
axios.defaults.baseURL = "https://api.themoviedb.org/3"
const Home = () => {
    const [trends, setTrends] = useState([])
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
        <div>
            <h1>Trending today</h1>
            <div className={css.Container}>
                <ul className={css.List}>
                {trends.map(el => {
                    return(<li key={el.id} className={css.Item}>
                        <Link to={`/movies/${el.id}`}>{el.title || el.name }</Link>
                    </li>)
                })}

                </ul>
            </div>
        </div>
    )
}
export {Home}