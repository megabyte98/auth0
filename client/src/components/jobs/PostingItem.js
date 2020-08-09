import React,{useState, Fragment} from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import Application from "./Application";
import {connect} from "react-redux";


const PostingItem = ({ MyPosting: {
    _id,
    description,
    eligibility,
    perks,
    name,
    avatar,
    skills,
    date,
    jobApplications
    
} }) => {

    const [displayApplications, toggleApplications] = useState(false)


    return (
        <div>
        <div className="profile bg-light">
            <img src={avatar} alt="" className="round-img" />
            <div>
                <h2>{name}</h2>
                <p><span><b>Description : </b></span> {description}</p>
                <p><span><b>Eligibility : </b></span> {eligibility}</p>
                <p><span><b>Perks : </b></span> {perks}</p>
                <button
                        onClick={() => {toggleApplications(!displayApplications) }}
                        type='button'
                        className='btn btn-primary'
                    >
                        View Applications
					</button>
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
                 {displayApplications && <Fragment>
                     <Application Applications={jobApplications} />
                     </Fragment>}
                
        </div>
    )
}

PostingItem.propTypes = {
    MyPosting: PropTypes.object.isRequired,
}

export default connect(null)(PostingItem)