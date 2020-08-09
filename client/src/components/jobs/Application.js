import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"



const Application = ({ Applications}) => {
    const applications = Applications.map(appli => (
        <tr key={appli._id}>
            <td>{appli.name}</td>
            <td className="hide-sm">{appli.githubusername}</td>
            <td>{appli.location}</td>
            <td></td>
            <td><button  className="btn btn-danger">Delete</button></td>
        </tr>

    ));
    return (
        <Fragment>
            <h3 className="my-2">Applicants Credentials </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="hide-sm">Social Links</th>
                        <th className="hide-sm">Current Location</th>
                        <th className="hide-sm">Skills</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{applications.length > 0 ? applications : <h4>No Applicants till now..</h4>}</tbody>
            </table>
        </Fragment>
    )
}

Application.propTypes = {
    Applications: PropTypes.array.isRequired,
}

export default connect(null)(Application)