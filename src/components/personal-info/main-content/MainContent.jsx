const MainContent = ({
  email,
  website,
  facebook,
  mobileNum,
  schoolName,
  degree,
  location,
  startDate,
  endDate
}) => {
  return (
    <div className="main-content">
      <div className="contact-resume">
        <ul className="contact-list">
          <li className="contact-list-item">{email}</li>
          <li className="contact-list-item">{mobileNum}</li>
          <li className="contact-list-item">{facebook}</li>
          <li className="contact-list-item">{website}</li>
        </ul>
      </div>
      <div className="education-resume">
        <h2>Education</h2>
        <ul className="education-list">
          <li className="eduction-list-item">{schoolName}</li>
          <li className="eduction-list-item">{degree}</li>
          <li className="eduction-list-item">{location}</li>
          <li className="eduction-list-item">{startDate}</li>
          <li className="eduction-list-item">{endDate}</li>
        </ul>
      </div>
    </div>
  )
}

export default MainContent
