// JoblyContextProvider.js
import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import JoblyContext from "./JoblyContext";
import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import useLocalStorage from "../hooks/useLocalStorage";

export const TOKEN_STORAGE_ID = "jobly-token";


const JoblyContextProvider = ({ children }) => {
    const [companies, setCompanies] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [token, setToken] = useLocalStorage([null]);
    const [filteredJobs, setFilteredJobs] = useState(null);
    const [filteredCompanies, setFilteredCompanies] = useState(null);



    useEffect(function loadUserInfo() {

        async function getCurrentUser() {
            if (token) {
                try {
                    let { username } = jwtDecode(token);
                    // put the token on the Api class so it can use it to call the API.
                    JoblyApi.token = token;
                    let currentUser = await JoblyApi.getUser([username]);
                    setUser(currentUser);
                } catch (err) {
                    console.error("App loadUserInfo: problem loading", err);
                    setUser(null);
                }
            }
        }


        getCurrentUser();
    }, [token]);



    useEffect(() => {
        async function fetchData() {
            try {
                const companiesData = await JoblyApi.request('companies');
                const jobsData = await JoblyApi.request('jobs');

                setCompanies(companiesData.companies);
                setJobs(jobsData.jobs);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);


    const signUp = async (signupData) => {
        try {
            let createToken = await JoblyApi.signup(signupData);
            setToken(createToken);
            setUser(signupData.username)
            setUserLoggedIn(true)
        } catch (error) {
            alert(error)
        }
    };



    const login = async (loginData) => {
        try {
            const tokenData = await JoblyApi.logIn(loginData);
            setToken(tokenData);
            const tokenDecoded = jwtDecode(tokenData);
            const username = tokenDecoded.username;
            setUser(username)
            setUserLoggedIn(true);
        } catch (error) {
            alert(error)
        }
    };

    const updateUserProfile = async (username, dataToUpdate) =>{
        try{
            let updateUser = await JoblyApi.updateUser(username, dataToUpdate);
            setUser(updateUser)

        } catch (error){
            alert(error)
        }
    };


    const logOut = () => {
        setToken(null)
        setUser(null)
        setUserLoggedIn(false)
        return <Navigate to='/' />
    };



    const search = (searchData, path) => {
        const query = searchData.toLowerCase();

        if (path === '/companies') {
            const filtered = companies.filter(company =>
                company.name.toLowerCase().startsWith(query)
            );

            if (filtered.length === 0) {
                setFilteredCompanies('0 results'); // Reset filtered companies state
            } else {
                setFilteredCompanies(filtered);
            }
        } else {
            const filtered = jobs.filter(job =>
                job.title.toLowerCase().startsWith(query)
            );

            if (filtered.length === 0) {
                setFilteredJobs('0 results'); // Reset filtered jobs state
            } else {
                setFilteredJobs(filtered);
            }
        }
    };



    return (
        <JoblyContext.Provider value={{ user, companies, jobs, isLoading, signUp, userLoggedIn, logOut, login, search, filteredCompanies, filteredJobs, jobs, updateUserProfile }}>
            {children}
        </JoblyContext.Provider>
    );
};

export default JoblyContextProvider;
