import { Link, Outlet } from "react-router-dom";
import logo from "../logo.png";

export const Header = () => {

    const logOut = () => window.location.assign('http://localhost:3000/login')

    return(
        <>
        {
            localStorage.username ? <>
                <header className="header">
                    <div className="logo">
                        <Link end to="/">
                            <img src={logo} alt="logo" width="50px" height="50px"></img>
                        </Link>
                    </div>
                    <div className="user">
                        <img src={localStorage.image} alt="logo" width="50px" height="50px" className="user__logo"></img>
                        <button onClick={logOut} className="button button__logout">Log out</button>
                    </div>
                </header>

                <Outlet></Outlet>
            </> : window.location.assign('http://localhost:3000/login')
        }

        </> 
    )
}