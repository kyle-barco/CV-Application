import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import DisplaySection from "../../DisplaySection"

const ExperienceInfoSection = ({
  companyName,
  positionTitle,
  jobDescription,
  jobStartDate,
  jobEndDate
}) => {
  return (
    <div className="job-experience-resume">
      <div className="title-resume"><FontAwesomeIcon icon={faAnglesRight} className="angles-right" /> Job Experience</div>
      <ul className="job-experience-list">
        <div className="job-start-end-date">
          <li className="job-experience-list-item job-start-date-resume">{jobStartDate}</li>
          <li className="job-experience-list-item job-end-date-resume">{jobEndDate}</li>
        </div>
        <div className="company-position-desc">
          <li className="job-experience-list-item company-name-resume">{companyName}</li>
          <li className="job-experience-list-item position-title-resume">{positionTitle}</li>
          <li className="job-experience-list-item job-description-resume">{jobDescription}</li>
        </div>
      </ul>
    </div>

  )
}

export default ExperienceInfoSection
