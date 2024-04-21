import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import JoblyContext from "../context/JoblyContext";
import SearchField from "../common/SearchField";
import JoblyApi from "../api/api";
import useLocalStorage from 'use-local-storage';


const JobList = () => {
    const { jobs, filteredJobs, user } = useContext(JoblyContext);
    const [applications, setApplications] = useLocalStorage('applications', []);

    const location = useLocation();
    const pathname = location.pathname;

    /** Checks if a job has been applied for. */
    function hasAppliedToJob(id) {
        if (applications.includes(id)) {
        };
    }
    // console.log(applications)

    const applyToJobs = async (id) => {
        if (hasAppliedToJob(id)) {
            return alert("You've already applied to this job.")

        };
        try {
            await JoblyApi.applyToJob(user.username, id);
            // Update the applications state or do any other necessary updates
            // Update the applications state
            setApplications([...applications, id]);

            // Store the updated applications in localStorage
            localStorage.setItem('applications', JSON.stringify([...applications, id]));

        } catch (error) {
            console.error("Error applying to job:", error);
            // Optionally, you can also handle the error and provide user feedback
        }
    };


    return (
        <>
            <SearchField pathname={pathname} />
            {filteredJobs === '0 results' ? (
                <p className="no-results">0 results found</p>
            ) : (
                <ul>
                    {(filteredJobs || jobs).map(job => (
                        <li key={job.id} className="card" id={job.id}>
                            <h5>{job.title}</h5>
                            <p>{job.companyName}</p>
                            <p>Salary: {job.salary}</p>
                            <p>Equity: {job.equity}</p>
                            {user && <button className="apply-button" onClick={() => applyToJobs(job.id)}>Apply</button>}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default JobList;
