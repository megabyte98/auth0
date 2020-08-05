import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const JobItem = ({ Job: {
    description,
    eligibility,
    perks,
    name,
    avatar,
    skills
    
} }) => {
    return (
        <div className="profile bg-light">
            <img src={avatar} alt="" className="round-img" />
            <div>
                <h2>{name}</h2>
                <p><span><b>Description : </b></span> {description}</p>
                <p><span><b>Eligibility : </b></span> {eligibility}</p>
                <p><span><b>Perks : </b></span> {perks}</p>
                <Link  className="btn btn-primary">Apply For Job</Link>
            </div>
            <ul>
                {skills.slice(0, 4).map((skill, index) => (
                    <li key={index} className="text-primary">
                        <i className="fas fa-check" />{skill}
                    </li>
                ))}
            </ul>
        </div>
    )
}

JobItem.propTypes = {
    Job: PropTypes.object.isRequired,
}

export default JobItem
