import { Outlet, NavLink } from "react-router-dom";
import css from "./HeaderLayout.module.css"

const HeaderLayout = () => {
    return (
        <>
        <nav className={css.Navbar}>
          <ul className={css.List}>
            <li>
              <NavLink to="/" className={css.Link}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={css.Link}>Movies</NavLink>
            </li>
          </ul>
      </nav> 
        <Outlet>
          
        </Outlet>
        </>
    )
}
export { HeaderLayout };