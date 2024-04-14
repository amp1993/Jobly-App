import React, { useContext } from "react";
import './NavBar.css'

import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import JoblyContext from "../context/JoblyContext";

const NavBar = () => {

    const { userLoggedIn, logOut, user } = useContext(JoblyContext)
    return (
        <div>
            <Navbar expand='md'>
                <NavLink to='/' className="navbar-brand">Jobly</NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/companies">Companies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/jobs">Jobs</NavLink>
                    </NavItem>
                    {userLoggedIn === false ? (
                        <>
                            <NavItem>
                                <NavLink to="/signup">Sign Up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/login">login</NavLink>
                            </NavItem>
                        </>

                    ) : (
                        <>
                            <NavItem>
                            <NavLink to={`/profile/${user.username}`}>Profile</NavLink>
                            </NavItem>
                            <NavItem>

                                <NavLink onClick={logOut}>
                                  Log Out
                                </NavLink>

                            </NavItem>
                        </>

                    )
                    }



                </Nav>
            </Navbar>

        </div>
    )
}

export default NavBar;