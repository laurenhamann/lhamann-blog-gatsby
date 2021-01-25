import React from 'react'
import { Link } from 'gatsby'




const NavUl = (props) => (
    <ul className={props.visible ? "visible" : "hidden"}>
        <li className="nav-item">
            <Link to="/" activeClassName="active">
                Home
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/projects" activeClassName="active">
                Projects
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/blogs" activeClassName="active">
                Blogs
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/about" activeClassName="active">
                About
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/contact" activeClassName="active">
                Contact
            </Link>
        </li>
    </ul>
)

export default NavUl;