import { Link, Outlet } from "react-router-dom";
import logo from "../logo.png";
import { useSelector } from "react-redux";

export const Header = () => {

    const test = useSelector(state => state.toolkit.userInfo);
    console.log(test);

    return(
        <>
            <header className="header">
                <div className="logo">
                    <Link end to="/home">
                        <img src={logo} alt="logo" width="50px" height="50px"></img>
                    </Link>
                </div>
                <div className="user">
                    <img src={localStorage.image} alt="logo" width="50px" height="50px" className="user__logo"></img>
                    <p>{localStorage.username ? localStorage.username : "unknown name"}</p>
                </div>
            </header>

            <Outlet></Outlet>
        </>
    )
}