import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";

const CompanyDetails = () => {
    const { handle } = useParams();
    const [company, setCompany] = useState([]);
    const [jobs, setJobs] = useState([]);



    useEffect(() => {
        async function fetchData() {
            try {
                const companiesData = await JoblyApi.getCompany(handle);
                setCompany(companiesData);
                setJobs(companiesData.jobs)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);


    console.log(jobs)

    return (
        <div>
            <h1>{company.name}</h1>
            <p>{company.description}</p>
            <ul>
                {jobs.map(job => (
                    <li key={job.id} className="card">
                        <div>
                            <h5>{job.title}</h5>
                            <p>Salary: {job.salary}</p>
                           <p>Equity: {job.equity}</p>
                            
                            </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default CompanyDetails;