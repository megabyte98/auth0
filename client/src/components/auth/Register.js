import React, { Fragment, useState } from 'react'
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom"
import { setAlert } from "../../actions/alert"
import { register } from "../../actions/auth"
import PropTypes from 'prop-types';
import loginImg from "./login.svg";


const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;
    const onchange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert("Password do not match", "danger")
        }
        else {
            register({ name, email, password });
        }
    }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
    <div className="base-container" >
        <div className="header">Register</div>
        <div className="content">
            <div className="loginimage">
                <img src={loginImg} />
            </div>
        </div>
        <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="loginform">
                 <div className="form-group">
                    <input className = "inputField"  type="text" placeholder="Name" name="name" autoComplete="off" value={name} onChange={e => onchange(e)} />
                </div>
                <div className="form-group"> 
                 <input type="name" placeholder="Email Address" autoComplete="off" name="email" value={email} onChange={e => onchange(e)} />
                </div>
                <small  style={{color:'black'}} className="form-text">This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onchange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={e => onchange(e)}

                    />
                </div>
            </div>
            <div className="footer1">
             <input type="submit" className="btn btn-primary" value="Register" />
            </div>
        </form>
        <br/>
        <p className="my-1">
                Already have an account? <Link className="registerbtn" to="/login">Sign In</Link>
            </p>
      </div>
        
    );
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register)


/*

<div className="registform">

            <h1>Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input className = "inputField"  type="text" placeholder="Name" name="name" autoComplete="off" value={name} onChange={e => onchange(e)} />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" autoComplete="off" name="email" value={email} onChange={e => onchange(e)} />
                    <small className="form-text"
                    >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onchange(e)}

                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={e => onchange(e)}

                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link className="registerbtn" to="/login">Sign In</Link>
            </p>
        </div>

*/