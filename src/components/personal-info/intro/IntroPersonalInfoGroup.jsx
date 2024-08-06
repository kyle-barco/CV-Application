import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import "../../styles/personal-info.css"
import { useState } from 'react'

const IntroPersonalInfoForm = ({ data, pictureUpload, handleData }) => {
  const [clicked, setCliked] = useState(false)
  return (
    <div className="intro-personal" >
      <button 
        onClick={() => setCliked(!clicked)}
        className="expand-section">
        <h2>Personal Information</h2>
        <FontAwesomeIcon icon={faChevronUp} className='icons' />
      </button>
      <div className="section-content">
        <div className="intro">
          <h3>Introduction</h3>
          <div className="profile-pic">
            <input
              onChange={pictureUpload}
              type="file" />
          </div>
          <div className="fullName">
            <input
              placeholder="Enter Full Name"
              value={data.fullName}
              data-key="fullName"
              onChange={handleData}
              type="text" />
          </div>
          <div className="current-position">
            <input
              placeholder="Enter Your current position/job/state"
              value={data.currentPosition}
              data-key="currentPosition"
              onChange={handleData}
              type="text" />
          </div>
          <div className="bio">
            <textarea
              placeholder="Tell something about yourself..."
              value={data.aboutSelf}
              onChange={handleData}
              data-key="aboutSelf"
              name="" id=""></textarea>
          </div>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <div className="email">
            <input
              onChange={handleData}
              value={data.email}
              data-key="email"
              type="email" />
          </div>
          <div className="phone-number">
            <input
              onChange={handleData}
              data-key="phoneNumber"
              value={data.phoneNumber}
              type="text" />
          </div>
          <div className="facebook-acc">
            <input
              onChange={handleData}
              data-key="facebookAcc"
              value={data.facebookAcc}
              type="text" />
          </div>
          <div className="website-url">
            <input
              onChange={handleData}
              data-key="websiteUrl"
              value={data.websiteUrl}
              type="text" />
          </div>
        </div>
      </div>
    </div>
  )

}

export default IntroPersonalInfoForm
