import React, { Fragment,useEffect } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile"



const MyApplication = ({ Myapplications,getCurrentProfile}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])
    const myApplications = Myapplications.map(appli => (
        <tr key={appli._id}>
            <td>{appli.recruiter}</td>
            <td className="hide-sm"><Moment format='YYYY/MM/DD'>{appli.date}</Moment></td>
            <td>{appli.Bio}</td>
            <td></td>
            <td><button  className="btn btn-danger">Delete</button></td>
        </tr>
    
    ));
    return (
        <Fragment>
            <h2 style={exp_style} className="my-2">My Job Applications</h2>
            <table className="table">
                <thead style =  {{ background:'#17a2b8', color:'white'}}>
                    <tr>
                        <th>Recruiter Name</th>
                        <th className="hide-sm">Applied On</th>
                        <th className="hide-sm">Documents Uploaded</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{myApplications}</tbody>
            </table>
        </Fragment>
    )
}

const exp_style = {
    fontFamily:'Merriweather',
    fontSize:'24px',
    fontWeight:'350'
}


MyApplication.propTypes = {
    Myapplications: PropTypes.array.isRequired,
    getCurrentProfile:PropTypes.func.isRequired
}

export default connect(null,{getCurrentProfile})(MyApplication)