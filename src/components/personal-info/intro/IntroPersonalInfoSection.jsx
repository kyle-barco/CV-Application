const IntroPersonalInfoSection = ({ profilePic, fullName, currPos, abtSelf }) => {
  return (
    <>
      <div className="intro-section">
        <div className="intro-infos-container">
          <h1 className="resume-name">{fullName}</h1>
          <p className="current-position">{currPos}</p>
          <p className="about-self">{abtSelf}</p>
        </div>
        <div className="img-container">
          <img src={profilePic} alt={profilePic} />
        </div>
      </div>
      <div className="down-triangle"></div>
    </>
  )
}

export default IntroPersonalInfoSection
