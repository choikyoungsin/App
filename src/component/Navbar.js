import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <h1 className='logo'><Link to="">Movie</Link></h1>
                <ul className="navbar-nav">
                    <li><Link to="" >홈</Link></li>
                    <li><Link to="movies" >영화리스트</Link></li>
                    <li><Link to="users" >사용자</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;