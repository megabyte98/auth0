import React, { Fragment, useEffect } from 'react'
import Spinner from "../layout/spinner"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { getJobs } from "../../actions/job"
import JobItem from "./JobItem"
const JobsPage = ({ getJobs, job : { jobs, loading } }) => {
    useEffect(() => {
        getJobs()
    }, [])
    return (
        <Fragment>
            {loading ? <Spinner /> : <Fragment>
                <h1 className="large text-primary">Job Opportunities</h1>
                <p className="lead">
                    <i className="fa fa-briefcase"> Browse and Apply to job of your choice</i>
                </p>
                <div className="profiles">
                    {jobs.length > 0 ? (jobs.map(Job => (<JobItem key={Job._id} Job={Job}/>))) :
                        <h4>No Jobs Found...</h4>}
                </div>
            </Fragment>}
        </Fragment>
    )
}

JobsPage.propTypes = {
    getJobs: PropTypes.func.isRequired,
    job: PropTypes.object.isRequired,
}

const mapStatToProps = state => ({
    job: state.job
})

export default connect(mapStatToProps, { getJobs })(JobsPage)
