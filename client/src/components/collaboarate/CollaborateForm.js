import React, {  useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {collabApply} from "../../actions/collab"

const CollaborateForm = ({history,match,collabApply}) => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        githubusername: '',
        linkedin : '',
        mail : '',
        reason : '',
        projectIdea : '',

    });
    const {
        name,
        location,
        githubusername,
        linkedin,
        mail,
        projectIdea,
        reason
    } = formData;
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        // console.log(formData)
        // console.log(match.params.id)
        collabApply(formData,history,match.params.id);
    };
    return (
        <Fragment>
            <h1 className='large text-primary'>Collaboration Request</h1>
            <p className='lead'>
    <i class="fa fa-handshake"/>{' '}Let's Collaborate  
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
                        placeholder='Why do you want to collaborate with me?'
                        rows = "6"
                        name='reason'
                        value={reason}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <textarea
                        placeholder='Your Project Idea?'
                        rows = "6"
                        name='projectIdea'
                        value={projectIdea}
                        onChange={e => onChange(e)}
                    />
                      <small className='form-text'>
                        Give a Brief Note about your Project 
					</small>
                </div>
                <p>Add Links to reach out to you</p>
                   
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
                

                <input type='submit' className='btn btn-primary my-1' />
                <Link className='btn btn-light my-1' to='/profiles'>
                    Go Back
				</Link>
            </form>
        </Fragment>
    );
};

CollaborateForm.propTypes = {
    CollaborateForm: PropTypes.func.isRequired,
    collabApply : PropTypes.func.isRequired
};


export default connect(null,{collabApply})(withRouter(CollaborateForm));