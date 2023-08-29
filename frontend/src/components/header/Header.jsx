import React from "react";
import logo from "../../assets/images/ChamanoTheDev.png"
import "./header.css";
import { Link } from "react-router-dom";
import { nav } from "../../assets/data/data";

export const Header = () => {
    window.addEventListener('scroll', function(){
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY > 100)
    })

    return (
        <>
        <header className='header'>
            <div className='scontainer flex'>
                <div className='logo'>
                    <img src={logo} alt="logo" width='160px'/>
                </div>
                <nav>
                    <ul>
                        {nav.map((link)=>(
                            <li key={link.id}>
                                <Link className="link" to={link.url}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='account flexCenter'>
                    My Account
                </div>
            </div>
        </header>
        
        </>
    )
}
