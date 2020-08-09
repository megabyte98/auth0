import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createJob } from '../../actions/job';

const JobForm = ({createJob}) => {
    const [formData, setFormData] = useState({
        description : '',
        eligibility : '',
        perks:'',
        skills : '',
        tag:''
    });

    const {
        description,
        eligibility,
        perks,
        skills,
        tag
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
                <div className='form-group'>
                    <select name='tag' value={tag} onChange={e => onChange(e)}>
                        <option value='0'>* Select domain your job comes under </option>
                        <option value='web Development'>web Development</option>
                        <option value='Android Development'>Android Development</option>
                        <option value='Machine Learning'>Machine Learning</option>
                        <option value='Artificial Intelligence'>Artificial Intelligence</option>
                        <option value='Internet of things'>Internet of things</option>
                        <option value='Other'>Other</option>
                    </select>
                    <small className='form-text'>
                        will help in finding apt candidates for the job
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