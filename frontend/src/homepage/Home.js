import React, {useContext} from "react";
import {useNavigate} from 'react-router-dom'
import JoblyContext from "../context/JoblyContext";
import './Home.css'

const Home = () => {
    const { user, userLoggedIn } = useContext(JoblyContext)
    const navigate = useNavigate();

    return(
        <div className="home-container">
            {userLoggedIn === false ? (
                <>
                 <h1>Jobly</h1>
                <p>All the jobs in one, convenient place.</p>
                <button onClick={()=>navigate('/login')}>Log In</button>
                <button onClick={()=>navigate('/signup')}>Sign Up</button>
                </>
            ): (
                <>
                 <h1>Welcome back, {user}</h1>
                </>
            )}
           

        </div>
    )
};

export default Home;