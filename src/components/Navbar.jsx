import React from "react";
import { FaUser } from "react-icons/fa"
import "../styles/navbar.css";

export function Navbar()  {



    return (
        <header className="navbar">
            <div className="avatar">
                <div className="user">
                    <FaUser fontSize={20} />
                </div>
                <div className="user-info">
                    <p className="name">Colaborador</p>
                </div>
            </div>
        </header>
    )

}