import IntroSection from "./personal-info/intro/IntroSection"


const Resume = ({ personalInfo }) => {
  return (
    <div className="resume-container">
      <IntroSection
        profilePic={personalInfo.profilePicUrl}
        fullName={personalInfo.fullName}
        currPos={personalInfo.currentPosition}
        abtSelf={personalInfo.aboutSelf}
      />
    </div>
  )
}

export default Resume
