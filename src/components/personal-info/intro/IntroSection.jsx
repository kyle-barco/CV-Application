const IntroSection = ({ profilePic, fullName, currPos, abtSelf }) => {
  return (
    <div className="intro-section">
      <img src={profilePic} alt={profilePic} />
      <h1 className="resume-name">{fullName}</h1>
      <h3 className="current-position">{currPos}</h3>
      <p className="about-self">{abtSelf}</p>
    </div>
  )
}

export default IntroSection
