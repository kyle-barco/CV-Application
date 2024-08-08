import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"

const MainContent = ({
  email,
  website,
  facebook,
  mobileNum,
  schoolName,
  degree,
  location,
  schoolStartDate,
  schoolEndDate,
  companyName,
  positionTitle,
  jobDescription,
  jobStartDate,
  jobEndDate
}) => {
  return (
    <div className="main-content">
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
      <div className="contact-and-education-wrapper">
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
        <div className="contact-resume">
          <div className="title-resume"><FontAwesomeIcon icon={faAnglesRight} className="angles-right" /> Contact</div>
          <table>
            <tbody>
              <tr>
                <td>Email:</td>
                <td className="input-value">{email}</td>
              </tr>
              <tr>
                <td>Mobile:</td>
                <td className="input-value">{mobileNum}</td>
              </tr>
              <tr>
                <td>Facebook:</td>
                <td className="input-value">{facebook}</td>
              </tr>
              <tr>
                <td>Website:</td>
                <td className="input-value">{website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MainContent
