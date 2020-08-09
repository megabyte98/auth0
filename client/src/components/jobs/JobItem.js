import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import { Link } from "react-router-dom"

const JobItem = ({ Job: {
    _id,
    description,
    eligibility,
    perks,
    name,
    avatar,
    skills,
    date,
    user
    
} }) => {
    return (
        <div className="profile bg-light">
            <img src={avatar} alt="" className="round-img" />
            <div>
                <Link to={`/profile/${user}`}>
                    <h4>{name}</h4>
                </Link>
                <p><span><b>Description : </b></span> {description}</p>
                <p><span><b>Eligibility : </b></span> {eligibility}</p>
                <p><span><b>Perks : </b></span> {perks}</p>
                <Link to={`/jobApply/${_id}`}  className="btn btn-primary">Apply For Job</Link>
            </div>
            <ul>
                <h4>Skills Required</h4>
                {skills.slice(0, 4).map((skill, index) => (
                    <li key={index} className="text-primary">
                        <i className="fas fa-check" />{skill}
                    </li>
                ))}
                 <p className='post-date'>
                    Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
                </p>
            </ul>
        </div>
    )
}

JobItem.propTypes = {
    Job: PropTypes.object.isRequired,
}

export default JobItem
