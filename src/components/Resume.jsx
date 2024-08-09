import IntroPersonalInfoSection from "./personal-info/intro/IntroPersonalInfoSection"
import MainContent from "./personal-info/main-content/MainContent"
import './styles/resume.css'

const Resume = ({ personalInfo, sections }) => {
  return (
    <main className="resume-container">
      <IntroPersonalInfoSection
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
        schoolStartDate={sections.educations[0].startDate}
        schoolEndDate={sections.educations[0].endDate}
        companyName={sections.experiences[0].companyName}
        positionTitle={sections.experiences[0].positionTitle}
        jobDescription={sections.experiences[0].description}
        jobStartDate={sections.experiences[0].startDate}
        jobEndDate={sections.experiences[0].endDate}

      />
    </main>
  )
}

export default Resume
