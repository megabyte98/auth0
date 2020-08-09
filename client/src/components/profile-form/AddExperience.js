import React, { Fragment, useState } from 'react'
import { Link, withRouter } from "react-router-dom"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addExperience } from "../../actions/profile"

const AddExperience = ({ addExperience, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const [toDateDisabled, toggleDisabled] = useState(false);
    const {
        company,
        title,
        location,
        from,
        to,
        current,
        description
    } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault();
        addExperience(formData, history)
    }
    return (
        <Fragment>
            <h1 className="large text-primary">
                Add An Experience
      </h1>
            <p style={{fontFamily:'Merriweather', fontSize:'20px'}} className="lead">
                <i className="fas fa-code-branch"></i> Add your developer/programming
        positions
      </p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                
                <div style = {sel_style} className="form-group">
                    <input type="text" style = {{fontSize:'16px'}} placeholder="Job Title" name="title" value={title} onChange={e => onChange(e)} required />
                </div>
                <div style = {sel_style} className="form-group">
                    <input type="text" style = {{fontSize:'16px'}} placeholder="Company" name="company" value={company} onChange={e => onChange(e)} required />
                </div>
                <div style = {sel_style} className="form-group">
                    <input type="text" style = {{fontSize:'16px'}} placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
                </div>
                <div  style = {sel_style} className="form-group">
                    <h4 style={{fontFamily:'Merriweather', fontSize:'20px'}}>From Date</h4>
                    <input type="date" style = {{fontSize:'16px'}} name="from" value={from} onChange={e => onChange(e)} />
                </div>
                <div style = {sel_style} className="form-group">
                    <p><input type="checkbox" name="current" checked={current}
                        value={current}
                        style = {{fontSize:'16px', cursor:'pointer'}}
                        onChange={() => {
                            setFormData({ ...formData, current: !current });
                            toggleDisabled(!toDateDisabled);
                        }} /> <a>{ ' ' }</a>Current Job</p>
                </div>
                <div style = {sel_style} className="form-group">
                    <h4 style={{fontFamily:'Merriweather', fontSize:'20px'}}>To Date</h4>
                    <input type="date" name="to"
                        disabled={toDateDisabled ? "disabled" : ""}
                        value={to}
                        style = {{fontSize:'16px'}}
                        onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Job Description"
                        style = {{fontSize:'16px'}}
                        value={description} onChange={e => onChange(e)}
                    ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </Fragment>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
}

const req_style = {
    color:'red',
    fontSize:'17px'

}

const sel_style = {
    width:'30rem',
    fontFamily:'Merriweather',
}


export default connect(null, { addExperience })(withRouter(AddExperience))
