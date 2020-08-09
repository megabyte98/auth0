import React, { Fragment, useEffect,useState } from 'react'
import Spinner from "../layout/spinner"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { getJobs,getMyPostings } from "../../actions/job"
import JobItem from "./JobItem"
import PostingItem from "./PostingItem"
const JobsPage = ({ auth : { user },getJobs,getMyPostings, job : { jobs, loading , MyPostings} }) => {
    useEffect(() => {
        getJobs();getMyPostings();
    }, [])
    const [toggledisplay, toggleJobs] = useState({
        jobsPosting: true,
        MyPosting:false
    })

    let Myjobs = jobs.filter(job => job.user !== user._id)    

    console.log(Myjobs)

    return (
        <Fragment>
            {loading ? <Spinner /> : <Fragment>
                <h1 className="large text-primary"></h1>
                <p className="lead">
                    <i className="fa fa-briefcase"> Browse and Apply to jobs of your choice</i>
                </p>
                <div className='my-2'>
                    <button
                        onClick={() => {toggleJobs({jobsPosting:true,MyPosting:false}) }}
                        type='button'
                        className='btn btn-light'
                    >
                        Job Postings
					</button>
                    <button
                         onClick={() => {toggleJobs({jobsPosting:false,MyPosting:true})}}
                        type='button'
                        className='btn btn-light'
                    >
                        My Postings
					</button>
                </div>
                {toggledisplay.jobsPosting && (
                    <Fragment>
                   <div className="profiles">
                    {Myjobs.length > 0 ? (Myjobs.map(MyJob => (<JobItem key={MyJob._id} Job={MyJob}/>))) :
                        <h4>No Jobs Found...</h4>}
                </div>
                       
                    </Fragment>
                )}
                
                  { toggledisplay.MyPosting && (
                    <Fragment>
                  <div className="profiles">
                    {MyPostings.length > 0 ? (MyPostings.map(MyPosting => (<PostingItem key={MyPosting._id} MyPosting={MyPosting}/>))) :
                        <h4>You haven't Posted about any job yet.. </h4>}
                </div>
                    </Fragment>
                )}
                
            </Fragment>}
        </Fragment>
    )
}

JobsPage.propTypes = {
    getJobs: PropTypes.func.isRequired,
    getMyPostings:PropTypes.func.isRequired,
    job: PropTypes.object.isRequired,
    profile : PropTypes.object.isRequired,
    user : PropTypes.object.isRequired

}

const mapStatToProps = state => ({
    job: state.job,
    profile : state.profile.profile,
    auth : state.auth
})

export default connect(mapStatToProps, { getJobs ,getMyPostings})(JobsPage)
