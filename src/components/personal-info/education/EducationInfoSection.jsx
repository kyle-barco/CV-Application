import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"

const EducationInfoSection = ({schoolName, degree, location, schoolStartDate, schoolEndDate}) => {
  return (
    <div className="education-resume">
      <div className="title-resume"><FontAwesomeIcon icon={faAnglesRight} className="angles-right" /> Education</div>
      <ul className="education-list">
        <div className="school-start-end-date">
          <li className="education-list-item">{schoolStartDate}</li>
          <li className="education-list-item">{schoolEndDate}</li>
        </div>
        <div className="school-degree-location">
          <li className="education-list-item school-name-resume">{schoolName}</li>
          <li className="education-list-item degree-resume">{degree}</li>
          <li className="education-list-item">{location}</li>
        </div>
      </ul>
    </div>
  )
}

export default EducationInfoSection
