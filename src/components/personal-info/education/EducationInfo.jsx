import '../../../styles/resume.css'

const EducationInfo = ({ info }) => {
  const { schoolName, degree, location, startDate, endDate } = info
  return (
    <div className="education-resume">
      <ul className="education-list">
        <div className="school-start-end-date">
          <li className="education-list-item">{startDate}</li>
          <li className="education-list-item">{endDate}</li>
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

export default EducationInfo
