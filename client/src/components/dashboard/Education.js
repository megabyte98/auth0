import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Moment from "react-moment"
import { connect } from "react-redux"
import { deleteEducation } from "../../actions/profile"



const Education = ({ education, deleteEducation }) => {
    const educations = education.map(edu => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td className="hide-sm">{edu.degree}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {
                    edu.to === null ? ('NOW') : (<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)
                }
            </td>
            <td><button onClick={() => deleteEducation(edu._id)} className="btn btn-danger">Delete</button></td>
        </tr>

    ));
    return (
        <div>
            <h2  style = {exp_style} className="my-2">Education Credentials </h2>
            <table className="table">
                <thead style = {{ background:'#17a2b8', color:'white', padding:'2rem'}}>
                    <tr>
                        <th>School/College</th>
                        <th className="hide-sm">Degree/Certificate</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                {educations}
                </tbody>
            </table>
        </div>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
}

const exp_style = {
    fontFamily:'Merriweather',
    fontSize:'24px',
    fontWeight:'350'
}



export default connect(null, { deleteEducation })(Education)
