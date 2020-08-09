import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const ProfileItem = ({ profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    bio,
    skills
} }) => {
    return (
      
 <div class="card-container">
         <div class="upper-container">
            <div class="image-container">
               <img src={avatar} />
            </div>
         </div>
         <div class="lower-container">
            <div>
               <h3>{name}</h3>
               <h5>{status}</h5>
               <h4>{company && <span>At {company}</span>}</h4>
            </div>
            <div>
               <p>{location && <span>{location}</span>}
               </p>
            </div>
            <div>
                <Link to={`/profile/${_id}`} className="btn">View Profile</Link>

            </div>
         </div>
      </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

const card_style = {
    marginRight:'3rem',
    marginBottom:'4rem',
    border:'1px solid black',
    boxShadow:'2px 3px 3px 3px black',
    background:'white',
    display:'flex',
    flexDirection:'column',
    color:'black',
    padding:'0px',
    height:'25rem',
    justifyContent:'space-around',
    width:'20rem',
    cursor:'pointer'
}

const img_style = {
    width:'6rem',
    height:'6rem'
}

const span_style = {
    background:'red',
    width:'20rem',
    margin:'0px',
    padding:'2rem'
}

export default ProfileItem

