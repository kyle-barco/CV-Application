import IntroSection from "./personal-info/intro/IntroSection"
import MainContent from "./personal-info/main-content/MainContent"

const Resume = ({ personalInfo, sections }) => {
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
        mobileNum={personalInfo.phoneNumber}
        facebook={personalInfo.facebookAcc}
        website={personalInfo.websiteUrl}
        schoolName={sections.educations[0].schoolName}
        degree={sections.educations[0].degree}
        location={sections.educations[0].location}
        startDate={sections.educations[0].startDate}
        endDate={sections.educations[0].endDate}
      />
    </div>
  )
}

export default Resume
