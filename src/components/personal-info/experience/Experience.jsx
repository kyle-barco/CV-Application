import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import uniqid from 'uniqid'

const Experience = ({ handleData, data }) => {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="experience-section form-item">
      <button
        onClick={() => setClicked(!clicked)}
        className="expand-section"
      >
        <h2>Job Experience</h2>
        <FontAwesomeIcon icon={clicked ? faChevronUp : faChevronDown} />
      </button>
      <div className={`section-content ${clicked ? 'open' : ''}`}>
        <form
          data-array-name='experiences'
          className="experience-form section-form"
          id={uniqid()}
          action="">
          <div className="expercience-form">
            <div className="form-input company-name">
              <label >Company Name: </label>
              <input
                data-key="companyName"
                onChange={handleData}
                id="company-name"
                value={data.experiences[1].companyName}
                placeholder="Enter Company Name"
                type="text" />
            </div>
            <div className="form-input position-title">
              <label htmlFor="">Position Title: </label>
              <input
                data-key="positionTitle"
                onChange={handleData}
                value={data.experiences[1].positionTitle}
                placeholder="Enter Position Title"
                id="position-title"
                type="text" />
            </div>
            <div className="form-input job-description">
              <label htmlFor="">Job Description: </label>
              <textarea
                data-key="description"
                onChange={handleData}
                value={data.experiences[1].description}
                placeholder="Enter Job description"
                id="job-description"
                type="text"></textarea>
            </div>
            <div className="form-input start-date">
              <label htmlFor="">Start Date: </label>
              <input
                id='start-date'
                value={data.experiences[0].startDate}
                data-key='startDate'
                onChange={handleData}
                placeholder='when did you start?'
                type="text" />
            </div>
            <div className="form-input end-date">
              <label htmlFor="">End Date: </label>
              <input
                id='end-date'
                value={data.experiences[0].endDate}
                data-key='endDate'
                onChange={handleData}
                placeholder='when it end?'
                type="text" />
            </div>
          </div>
        </form>
      </div >


    </div >
  )
}
export default Experience
