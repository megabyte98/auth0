import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });
    const [displaySocialInputs, toggleSocialInputs] = useState(false);
    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history)
    };
    // useEffect(() => {
    // 	getCurrentProfile();
    // 	// eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [getCurrentProfile]);
    return (
        <Fragment>
            <h1 className='large text-primary'>Create Your Profile</h1>
            <p className='lead'>
                <i className='fas fa-user' /> Let's get some information to make your
				profile stand out
			</p>
            <small style = {req_style}>*  required field</small>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <div style = {sel_style} className='form-group'>
                    <select  style = {{fontSize:'16px', cursor:'pointer'}} name='status' value={status} onChange={e => onChange(e)}>
                        <option value='0'>Select Professional Status</option>
                        <option value='Developer'>Developer</option>
                        <option value='Junior Developer'>Junior Developer</option>
                        <option value='Senior Developer'>Senior Developer</option>
                        <option value='Manager'>Manager</option>
                        <option value='Student or Learning'>Student or Learning</option>
                        <option value='Instructor'>Instructor or Teacher</option>
                        <option value='Intern'>Intern</option>
                        <option value='Other'>Other</option>
                    </select>
                    <small className='form-text'>
                     <small style = {req_style}>*  </small>
                        Give us an idea of where you are at in your career
					</small>
                </div>
                <div style = {sel_style} className='form-group'>
                    <input 
                        type='text'
                        placeholder='Company'
                        name='company'
                        style = {{fontSize:'16px'}}
                        value={company}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        Could be your own company or one you work for or  if u are a student specify your college
					</small>
                </div>
                <div style = {sel_style} className='form-group'>
                    <input
                        type='text'
                        placeholder='Website'
                        name='website'
                        style = {{fontSize:'16px'}}
                        value={website}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        Could be your own or a company website
					</small>
                </div>
                <div style = {sel_style} className='form-group'>
                    <input
                        type='text'
                        placeholder='Location'
                        style = {{fontSize:'16px'}}
                        name='location'
                        value={location}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        <small style = {req_style}>*  </small>
                        City & state suggested (eg. Boston, MA)
					</small>
                </div>
                <div style = {sel_style} className='form-group'>
                    <input
                        type='text'
                        placeholder='Skills'
                        name='skills'
                        style = {{fontSize:'16px'}}
                        value={skills}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        <small style = {req_style}>*  </small>
                        Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
					</small>
                </div>
                <div style = {sel_style} className='form-group'>
                    <input
                        type='text'
                        placeholder='Github Profile Link'
                        name='githubusername'
                        value={githubusername}
                        style = {{fontSize:'16px'}}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                        If you want your latest repos add your Github profile link</small>
                </div>
                <div className='form-group'>
                    <textarea
                        placeholder='A short bio of yourself'
                        name='bio'
                        style = {{fontSize:'16px'}}
                        value={bio}
                        onChange={e => onChange(e)}
                    />
                    <small className='form-text'>Tell us a little about yourself</small>
                </div>

                <div  className='my-2'>
                    <button
                        onClick={() => toggleSocialInputs(!displaySocialInputs)}
                        type='button'
                        className='btn btn-light'
                    >
                        Add Social Network Links
					</button>
                    <span>Optional</span>
                </div>
                {displaySocialInputs && (
                    <Fragment>
                        <div style = {sel_style}  className='form-group social-input'>
                            <i className='fab fa-twitter fa-2x' />
                            <input
                                type='text'
                                placeholder='Twitter URL'
                                name='twitter'
                                style = {{fontSize:'16px', height:'3rem'}}
                                value={twitter}
                                onChange={e => onChange(e)}
                            />
                        </div>

                        <div style = {sel_style}  className='form-group social-input'>
                            <i className='fab fa-facebook fa-2x' />
                            <input
                                type='text'
                                placeholder='Facebook URL'
                                name='facebook'
                                value={facebook}
                                style = {{fontSize:'16px'}}
                                onChange={e => onChange(e)}
                            />
                        </div>


                        <div style = {sel_style}  className='form-group social-input'>
                            <i className='fab fa-linkedin fa-2x' />
                            <input
                                type='text'
                                placeholder='Linkedin URL'
                                name='linkedin'
                                value={linkedin}
                                style = {{fontSize:'16px'}}
                                onChange={e => onChange(e)}
                            />
                        </div>

                        <div style = {sel_style}  className='form-group social-input'>
                            <i className='fab fa-instagram fa-2x' />
                            <input
                                type='text'
                                placeholder='Instagram URL'
                                name='instagram'
                                value={instagram}
                                style = {{fontSize:'16px'}}
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

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
    // getCurrentProfile: PropTypes.func.isRequired,
    // profile: PropTypes.object.isRequired
};
// const mapStateToProps = state => ({
// 	profile: state.profile
// });

// style the color for required field 
const req_style = {
    color:'red',
    fontSize:'17px'

}

const sel_style = {
    width:'30rem',
    fontFamily:'Merriweather',
}

export default connect(null, { createProfile })(
    withRouter(CreateProfile)
);