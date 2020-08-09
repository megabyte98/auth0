import React, { Fragment, useEffect } from 'react'
import Spinner from "../layout/spinner"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { getAllProfiles } from "../../actions/profile"
import ProfileItem from "./ProfileItem"
const Profiles = ({ getAllProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getAllProfiles()
    }, [])
    return (
        <Fragment>
            {loading ? <Spinner /> : <Fragment>
                <h1 className="large text-primary">Developers</h1>
                <p className="lead">
                    <i className="fab fa-connectdevelop">{ ' ' }Browse and connect with Developers</i>
                </p>
                <div style={profile_display} className="profiles">
                    {profiles.length > 0 ? (profiles.map(profile => (<ProfileItem key={profile._id} profile={profile} />))) :
                        <h4>No Profiles Found...</h4>}
                </div>
            </Fragment>}
        </Fragment>
    )
}

Profiles.propTypes = {
    getAllProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStatToProps = state => ({
    profile: state.profile
})

const profile_display = {
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    
    
}

export default connect(mapStatToProps, { getAllProfiles })(Profiles)
