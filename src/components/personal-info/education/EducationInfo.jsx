import '../../styles/resume.css'

const EducationInfo = ({ info }) => {
  return (
    <div className="education-resume">
      <ul className="education-list">
        <div className="school-start-end-date">
          <li className="education-list-item">{info.startDate}</li>
          <li className="education-list-item">{info.endDate}</li>
        </div>
        <div className="school-degree-location">
          <li className="education-list-item school-name-resume">{info.schoolName}</li>
          <li className="education-list-item degree-resume">{info.degree}</li>
          <li className="education-list-item">{info.location}</li>
        </div>
      </ul>
    </div>
  )
}

export default EducationInfo
