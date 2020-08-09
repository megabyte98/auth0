import React, { Fragment, useState } from 'react'
import { Link, withRouter } from "react-router-dom"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from "../../actions/profile"

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const [toDateDisabled, toggleDisabled] = useState(false);
    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault();
        addEducation(formData, history)
    }
    return (
        <Fragment>
            <h1 className="large text-primary">
                Add your Education Details
      </h1>
            <p style={{fontFamily:'Merriweather', fontSize:'20px'}} className="lead">
                <i className="fas fa-code-branch"></i> Add any school/college/course you have completed
      </p>
            <small></small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div style = {sel_style} className="form-group">
                    <input style = {{fontSize:'16px'}} type="text" placeholder="Degree or Certificate" name="degree" value={degree} onChange={e => onChange(e)} required />
                </div>
                <div style = {sel_style} className="form-group">
                    <input style = {{fontSize:'16px'}} type="text" placeholder="school/college/source" name="school" value={school} onChange={e => onChange(e)} required />
                </div>
                <div style = {sel_style} className="form-group">
                    <input style = {{fontSize:'16px'}}  type="text" placeholder="Field Of Study" name="fieldofstudy" value={fieldofstudy} onChange={e => onChange(e)} />
                </div>
                <div style = {sel_style} className="form-group">
                    <h4 style={{fontFamily:'Merriweather', fontSize:'20px'}}>From Date</h4>
                    <input style = {{fontSize:'16px'}} type="date" name="from" value={from} onChange={e => onChange(e)} />
                </div>
                <div style = {sel_style} className="form-group">
                    <p><input type="checkbox" name="current" checked={current}
                        value={current}
                        onChange={() => {
                            setFormData({ ...formData, current: !current });
                            toggleDisabled(!toDateDisabled);
                        }} /> {' '}Current</p>
                </div>
                <div style = {sel_style} className="form-group">
                    <h4 style={{fontFamily:'Merriweather', fontSize:'20px'}}>To Date</h4>
                    <input style = {{fontSize:'16px'}} type="date" name="to"
                        disabled={toDateDisabled ? "disabled" : ""}
                        value={to}
                        onChange={e => onChange(e)} />
                </div>
                <div style = {sel_style} className="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Course Description"
                        value={description} onChange={e => onChange(e)}
                    ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </Fragment>
    )
}

const req_style = {
    color:'red',
    fontSize:'17px'

}

const sel_style = {
    width:'30rem',
    fontFamily:'Merriweather',
}


AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
}

export default connect(null, { addEducation })(withRouter(AddEducation))
