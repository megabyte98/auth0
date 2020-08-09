import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {jobApply} from "../../actions/job"

const JobApply = ({jobApply,history,match}) => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        education:'',
        skills: '',
        languages :'',
        githubusername: '',
        linkedin : '',

    });
    const [displaySocialInputs, toggleSocialInputs] = useState(false);
    const {
        name,
        location,
        skills,
        bio,
        education,
        languages,
        githubusername,
        linkedin,
        mail
    } = formData;
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)
        console.log(match.params.id)
        jobApply(formData,history,match.params.id);
    };
    return (
        <Fragment>
            <h1 className='large text-primary'>Apply for Job</h1>
            <p className='lead'>
                <i className='fas fa-user' /> Let's get some information to make your
				Application stand out
			</p>
            <small>* = required field</small>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Full Name'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        Could be your prefered Name
					</small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Your Recent Education Details'
                        name="education"
                        value={education}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        Could be degree/bootCamp you attended recently 
					</small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Location'
                        name='location'
                        value={location}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        Current City & State Suggested 
					</small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Skills'
                        name='skills'
                        value={skills}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
					</small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Languages'
                        name='languages'
                        value={languages}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        Please use comma separated values (eg. English,Spanish,Hindi...)
					</small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Github Username'
                        name='githubusername'
                        value={githubusername}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        Enter your Github link,
					</small>
                </div>
                <div className='form-group'>
                    <textarea
                        placeholder='Why are you interested in the Job?'
                        rows = "5"
                        name='bio'
                        value={bio}
                        onChange={e => onChange(e)}
                    />
                </div>

                <div className='my-2'>
                    <button
                        onClick={() => toggleSocialInputs(!displaySocialInputs)}
                        type='button'
                        className='btn btn-light'
                    >
                        Add Links to reach you
					</button>
                    <span>Optional</span>
                </div>
                {displaySocialInputs && (
                    <Fragment>
                   
                        <div className='form-group social-input'>
                            <i className='fab fa-linkedin fa-2x' />
                            <input
                                type='text'
                                placeholder='Linkedin URL'
                                name='linkedin'
                                value={linkedin}
                                onChange={e => onChange(e)}
                            />
                        </div>

                        <div className='form-group social-input'>
                        <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                            <input
                                type='text'
                                placeholder='Email Address'
                                name='mail'
                                value={mail}
                                onChange={e => onChange(e)}
                            />
                        </div>
                    </Fragment>
                )}

                <input type='submit' className='btn btn-primary my-1' />
                <Link className='btn btn-light my-1' to='/dashboard'>
                    Go Back
				</Link>
            </form>
        </Fragment>
    );
};

JobApply.propTypes = {
    jobApply: PropTypes.func.isRequired
};


export default connect(null,{jobApply})(withRouter(JobApply));