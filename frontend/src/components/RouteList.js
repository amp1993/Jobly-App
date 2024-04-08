import React from "react";
import { Routes, Route} from 'react-router-dom';
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetails from "./CompanyDetails";
import UserForm from "./UserForm";
import LoginForm from "./LoginForm";
import PageNotFound from "./PageNotFound";
import Home from "./Home";

const RouteList = () => {

    return(
        <Routes>
            <Route path='/'>
                <Home />
            </Route>
            <Route path='jobs'>
                <JobList />
            </Route>
            <Route path='/companies'>
                <CompanyList />
            </Route>
            <Route path='/companies/name'>
                <CompanyDetails />
            </Route>
            <Route path='/profile'>
                <UserForm />
            </Route>
            <Route path='login'>
                <LoginForm />
            </Route>
            <Route path='*'>
                <PageNotFound />
            </Route>
        </Routes>
    )
    

};

export default RouteList;