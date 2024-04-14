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
import ProfileForm from "../profile/ProfileForm";

const RouteList = () => {

    const {companies, jobs, signUp, user } = useContext(JoblyContext);


    return (
            <Routes>
                <Route  path='/' element={<Home />}/>
                    
                <Route path='/jobs' element={ <JobList jobs={jobs}/>}/>
                   
                <Route exact path='/companies' element={<CompanyList companies={companies}/>} />

                <Route path='/companies/:handle' element={<CompanyDetails companies={companies} jobs={jobs}/>}  />

                <Route path='/profile/:username' element={<ProfileForm  />} />

                <Route path='/login' element={<LoginForm />}/>

                <Route path='/signUp' element={<SignupForm signUp={signUp}/>}/>


                <Route path='*' element={<PageNotFound />}/>
                    

            </Routes>
    );
};

export default RouteList;
