const MainContent = ({ email, website, facebook, mobileNum }) => {
  return (
    <div className="main-content">
      <div className="contact">
        <ul className="contact-list">
          <li className="contact-list-item">{email}</li>
          <li className="contact-list-item">{mobileNum}</li>
          <li className="contact-list-item">{facebook}</li>
          <li className="contact-list-item">{website}</li>
        </ul>
      </div>
    </div>
  )
}

export default MainContent
