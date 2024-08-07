import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import uniqid from 'uniqid'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import "../../styles/personal-info.css"
import { useState } from 'react'

const Education = ({ data, handleData }) => {
  const [clicked, setCliked] = useState(false)

  return (
    <div className="education-section" >
      <button
        onClick={() => setCliked(!clicked)}
        className="expand-section">
        <h2>Educational Background</h2>
        <FontAwesomeIcon icon={clicked ? faChevronUp : faChevronDown} className='icons' />

      </button>
      <div className={`section-content ${clicked ? "open" : ''}`}>
        <form
          data-array-name="educations"
          id={uniqid()}
          className="education-form section-form">
          <div className="form-input school-name">
            <label htmlFor="">School Name </label>
            <input
              value={data.educations[0].schoolName}
              id="school-name"
              data-key="schoolName"
              onChange={handleData}
              placeholder='Enter School'
              type="text" />
          </div>
          <div className="form-input degree">
            <label htmlFor="">Course/Degree: </label>
            <input
              id='degree'
              value={data.educations[0].degree}
              data-key='degree'
              onChange={handleData}
              placeholder='Enter Degree'
              type="text" />
          </div>
          <div className="form-input location">
            <label htmlFor="">Location: </label>
            <input
              id='location'
              value={data.educations[0].location}
              data-key='location'
              onChange={handleData}
              placeholder='Enter Location'
              type="text" />
          </div>
          <div className="form-input start-date">
            <label htmlFor="">Start Date: </label>
            <input
              id='start-date'
              value={data.educations[0].startDate}
              data-key='startDate'
              onChange={handleData}
              placeholder='when did you start?'
              type="text" />
          </div>
          <div className="form-input end-date">
            <label htmlFor="">End Date: </label>
            <input
              id='end-date'
              value={data.educations[0].endDate}
              data-key='endDate'
              onChange={handleData}
              placeholder='when is your graduation?'
              type="text" />
          </div>
        </form>
      </div>
    </div>
  )

}

export default Education

