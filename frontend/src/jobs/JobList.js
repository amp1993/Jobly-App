import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import JoblyContext from "../context/JoblyContext";
import SearchField from "../common/SearchField";

const JobList = () => {
    const { jobs, filteredJobs } = useContext(JoblyContext);


    const location = useLocation();
    const pathname = location.pathname;



    console.log(jobs)

    return (
        <>
            <SearchField pathname={pathname} />
            {filteredJobs === null ? (
                <p className="no-results">0 results found</p>
            ) : (
                <ul>
                    {(filteredJobs || jobs).map(job => (

                        <li key={job.company_handle} className="card">
                            <h5>{job.title}</h5>
                            <p>{job.companyName}</p>
                            <p>Salary: {job.salary}</p>
                            <p>Equity: {job.equity}</p>

                        </li>))}
                </ul>)}
        </>
    );
};

export default JobList;