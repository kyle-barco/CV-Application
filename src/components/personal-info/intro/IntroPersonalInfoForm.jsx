import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import "../../../styles/personal-info.css"
import { useState } from 'react'

const IntroPersonalInfoForm = ({ data, pictureUpload, handleData }) => {
  const [clicked, setCliked] = useState(false)

  return (
    <div className="intro-personal form-item" >
      <button
        onClick={() => setCliked(!clicked)}
        className="expand-section">
        <h2>Personal Information</h2>
        <FontAwesomeIcon icon={clicked ? faChevronUp : faChevronDown} className='icons' />

      </button>
      <div className={`section-content form-input ${clicked ? "open" : ''}`}>
        <div className="intro form-style">
          <div className="profile-pic">
            <input
              className='profile-pic-input'
              onChange={pictureUpload}
              type="file"
              accept="image/*"
            />
            <span>Add Image</span>
          </div>
          <div className="fullName">
            <label htmlFor="fullName">Full Name: </label>
            <input
              placeholder="Enter Full Name"
              value={data.fullName}
              data-key="fullName"
              onChange={handleData}
              type="text" />
          </div>
          <div className="current-position-input">
            <label htmlFor="currentPosition">Current Position: </label>
            <input
              placeholder="Enter Your current position/job/state"
              value={data.currentPosition}
              data-key="currentPosition"
              onChange={handleData}
              type="text" />
          </div>
          <div className="bio">
            <label htmlFor="aboutSelf">Bio: </label>
            <textarea
              placeholder="Tell something about yourself..."
              value={data.aboutSelf}
              onChange={handleData}
              data-key="aboutSelf"
              name="" id=""></textarea>
          </div>
        </div>
        <div className="contact form-style">
          <label htmlFor="email">Email: </label>
          <div className="email">
            <input
              onChange={handleData}
              value={data.email}
              data-key="email"
              type="email" />
          </div>
          <div className="phone-number">
            <label htmlFor="phone-number">Phone Number: </label>
            <input
              onChange={handleData}
              data-key="phoneNumber"
              value={data.phoneNumber}
              type="text" />
          </div>
          <div className="facebook-acc">
            <label htmlFor="facebookAcc">Facebook: </label>
            <input
              onChange={handleData}
              data-key="facebookAcc"
              value={data.facebookAcc}
              type="text" />
          </div>
          <div className="website-url">
            <label htmlFor="website">Website</label>
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
