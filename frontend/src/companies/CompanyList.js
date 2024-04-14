import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchField from "../common/SearchField";
import JoblyContext from "../context/JoblyContext";

const CompanyList = () => {
    const { companies, filteredCompanies } = useContext(JoblyContext);
    console.log(companies)
    const location = useLocation();
    const pathname = location.pathname;

  
    return (
        <>
            <SearchField pathname={pathname}/>

            {filteredCompanies === null  ? (
                <p className="no-results">0 results found</p>
            ) : (
                <ul>
                    {(filteredCompanies || companies).map(company => (
                        <li className="card" key={company.handle}>
                            <Link to={`/companies/${company.handle}`}>
                                <div>
                                    <h3>{company.name}</h3>
                                    <p>{company.description}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default CompanyList;
