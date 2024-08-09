import '../../styles/resume.css'
const ExperienceInfo = ({
  info
}) => {
  return (
    <div className="job-experience-resume">
      <ul className="job-experience-list">
        <div className="job-start-end-date">
          <li className="job-experience-list-item job-start-date-resume">{info.startDate}</li>
          <li className="job-experience-list-item job-end-date-resume">{info.endDate}</li>
        </div>
        <div className="company-position-desc">
          <li className="job-experience-list-item company-name-resume">{info.companyName}</li>
          <li className="job-experience-list-item position-title-resume">{info.positionTitle}</li>
          <li className="job-experience-list-item job-description-resume">{info.description}</li>
        </div>
      </ul>
    </div>

  )
}

export default ExperienceInfo 
