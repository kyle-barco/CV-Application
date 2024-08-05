import IntroSection from "./personal-info/intro/IntroSection"
import MainContent from "./personal-info/main-content/MainContent"

const Resume = ({ personalInfo }) => {
  return (
    <div className="resume-container">
      <IntroSection
        profilePic={personalInfo.profilePicUrl}
        fullName={personalInfo.fullName}
        currPos={personalInfo.currentPosition}
        abtSelf={personalInfo.aboutSelf}
      />
      <MainContent 
        email={personalInfo.email}
      />
    </div>
  )
}

export default Resume
