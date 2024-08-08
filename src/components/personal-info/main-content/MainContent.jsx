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
        <div className="title-resume">Job Experience</div>
        <ul className="job-experience-list">
          <li className="job-experience-list-item">{companyName}</li>
          <li className="job-experience-list-item">{positionTitle}</li>
          <li className="job-experience-list-item">{jobDescription}</li>
          <li className="job-experience-list-item">{jobStartDate}</li>
          <li className="job-experience-list-item">{jobEndDate}</li>
        </ul>
      </div>
      <div className="contact-and-education-wrapper">
        <div className="contact-resume">
          <div className="title-resume">Contact</div>
          <ul className="contact-list">
            <li className="contact-list-item">{email}</li>
            <li className="contact-list-item">{mobileNum}</li>
            <li className="contact-list-item">{facebook}</li>
            <li className="contact-list-item">{website}</li>
          </ul>
        </div>
        <div className="education-resume">
          <div className="title-resume">Education</div>
          <ul className="education-list">
            <li className="eduction-list-item">{schoolName}</li>
            <li className="eduction-list-item">{degree}</li>
            <li className="eduction-list-item">{location}</li>
            <li className="eduction-list-item">{schoolStartDate}</li>
            <li className="eduction-list-item">{schoolEndDate}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MainContent
