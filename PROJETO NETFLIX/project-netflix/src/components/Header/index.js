import React from "react";
import './styled.css';
import logo from '../../assets/netflix-94.png';
import profile from '../../assets/profile.png';


const Header = ({blackHeader}) => {
    return(
        <header className={blackHeader? "black" : null}>
            <div className="headerLogo">
                <a href="">
                    <img src={logo} alt="Netflix logo"></img>
                </a>
            </div>
            <div className="headerUser">
                <a href="">
                    <img src={profile} alt="Usuário avatar"></img>
                </a>
            </div>
        </header>
    )
}

export default Header