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
            <h3 className="my-2">My Job Applications</h3>
            <table className="table">
                <thead>
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

MyApplication.propTypes = {
    Myapplications: PropTypes.array.isRequired,
    getCurrentProfile:PropTypes.func.isRequired
}

export default connect(null,{getCurrentProfile})(MyApplication)