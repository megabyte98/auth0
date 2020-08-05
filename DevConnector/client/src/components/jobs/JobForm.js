import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createJob } from '../../actions/job';

const JobForm = ({createJob}) => {
    const [formData, setFormData] = useState({
        description : '',
        eligibility : '',
        perks:'',
        skills : ''
    });

    const {
        description,
        eligibility,
        perks,
        skills,
    } = formData;

    const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)
        createJob(formData)
    };

    return (
        <div className='post-form'>
            <div className='bg-primary p'>
                <h3>Post a Job</h3>
            </div>
            <form
                className='form my-1'
                onSubmit={e => onSubmit(e)}
            >
                <div className="form-group">
                <textarea
                    name='description'
                    cols='30'
                    rows='5'
                    placeholder='Description About The Job'
                    value={description}
                    onChange={e => onChange(e)}
                    required
                />
                </div>
                <div className="form-group">
                   <textarea
                    name='eligibility'
                    cols='30'
                    rows='5'
                    placeholder='Who are eligible for the job?'
                    value={eligibility}
                    onChange={e => onChange(e)}
                    required
                />
                </div>
                <div className="form-group">
                   <textarea
                    name='perks'
                    cols='30'
                    rows='5'
                    placeholder='Perks with the job'
                    value={perks}
                    onChange={e => onChange(e)}
                    required
                />
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
                <input type='submit' className='btn btn-dark my-1' value='Submit' />
            </form>
        </div>
    );
};

JobForm.propTypes = {
    createJob: PropTypes.func.isRequired   
};




export default connect(
    null,{createJob}
)(JobForm);