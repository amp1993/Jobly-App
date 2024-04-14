import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import CompanyDetails from "../companies/CompanyDetails";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import PageNotFound from "../common/PageNotFound";
import Home from "../homepage/Home";
import JoblyContext from "../context/JoblyContext";
import SignupForm from "../forms/SignupForm";
import LoginForm from "../forms/LoginForm";


const RouteList = () => {

    const {companies, jobs, signUp } = useContext(JoblyContext);


    return (
            <Routes>
                <Route  path='/' element={<Home />}/>
                    
                <Route path='/jobs' element={ <JobList jobs={jobs}/>}/>
                   
                <Route exact path='/companies' element={<CompanyList companies={companies}/>} />

                <Route path='/companies/:handle' element={<CompanyDetails companies={companies} jobs={jobs}/>}  />

                <Route path='/profile' element={<LoginForm  signUp={signUp}/>} />

                <Route path='/login' element={<LoginForm />}/>

                <Route path='/signUp' element={<SignupForm signUp={signUp}/>}/>


                <Route path='*' element={<PageNotFound />}/>
                    

            </Routes>
    );
};

export default RouteList;
