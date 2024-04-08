import React from "react";
import { NavLink } from "react-router-dom";
import {Navbar, Nav, NavItem} from "reactstrap";


const NavBar = ()=>{
    return(
        <div>
            <NavBar expand='md'>
                <NavLink path='/' className="navbar-brand">Jobly</NavLink>
            </NavBar>

            <Nav>
                <NavItem>
                    <NavLink path="/companies">Companies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink path="/jobs">Jobs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink path="/login">login</NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default NavBar;