import { useSelector } from "react-redux";
import { useEffect } from "react";

export const AuthWindow = () => {

    const accountList = useSelector(state => state.toolkit.accountList);
    let enterUserName;
    let enterPassword;

    useEffect(() => {

    }, [])
    
    const checkData = (e) => {

        e.preventDefault()

        for(let item of Object.values(accountList)){
            
            if(item.password === enterPassword){

                const chek = document.querySelector(".authorization__checkbox").value;
                   
                localStorage.username = enterUserName;
                localStorage.image = item.image;
                localStorage.password = enterPassword;

                if(chek){
                    document.querySelector("#username").value = localStorage.username;
                    document.querySelector("#password").value = localStorage.password;
                }
                
                window.location.assign('http://localhost:3000/home');
            } 
            if(item.password !== enterPassword) {
                
                const username = document.querySelector("#username");
                const password = document.querySelector("#password");
                const errorMenu = document.querySelector(".error");

                username.style.border = "1px solid red";
                password.style.border = "1px solid red";
                errorMenu.style.display = "flex";
            }
        }
        
    }

    const closeModal = () => {
        const errorMenu = document.querySelector(".error");
        const username = document.querySelector("#username");
        const password = document.querySelector("#password");

        errorMenu.style.display = "none";
        username.style.border = "1px solid rgba(139,139,139, .7)";
        password.style.border = "1px solid rgba(139,139,139, .7)";
    }

    return(
        <div className="container">
            <form className="authorization">
                <h1 className="authorization__title">Authentication</h1>
                <hr></hr>
                <div className="authorization-block">
                    <label className="authorization__label" htmlFor="username">Username: </label>
                    <input type="text" className="authorization__input" id="username" name="username" placeholder="Enter username" onChange={(e) => enterUserName = e.target.value}></input>
                </div>
                <div className="authorization-block">
                    <label className="authorization__label" htmlFor="password">Password: </label>
                    <input type="password" className="authorization__input" id="password" name="password" placeholder="Enter password" onChange={(e) => enterPassword = e.target.value}></input>
                </div>

                <div className="authorization-remember">
                    <input type="checkbox" className="authorization__checkbox" id="remember"></input>
                    <label className="authorization__label" for="remember">Remember me</label>
                </div>

                <div className="authorization-block">
                    <button className="authorization__button" onClick={(e) => checkData(e)}>Log in</button>
                </div>
            </form>

            <div className="error">
                <h1 className="error__message">Invalid username or password</h1>
                <button className="error__button" onClick={closeModal}>Ok</button>
            </div>
        </div>
    )
}