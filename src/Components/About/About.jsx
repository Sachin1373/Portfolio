import React from 'react'
import photo from '../../assets/Profile_Photo.png'
import './About.css'

function About() {
  return (
    <>
      <div className="About">
        <div className="left">
            <img src={photo} alt="" />
        </div>

        <div className="right">
            <span>Name : Sachin Vijaykumar Rathod</span>
            <span>Date of Birth : 13/07/2003</span>
            <span>Education : BE (CSE) From KLE Dr M S Sheshgiri College of Engineering and Technology Belagavi.</span>
            <span>Location : Akkalkot, Solapur, Maharashtra</span>
            <span>Languages : English, Hindi, Kannada, Marathi</span>
            <span>Email : sachinvrathod1373@gmail.com</span>
            <span>Phone No : 6362198200</span>
        </div>
      </div>
    </>
  )
}

export default About