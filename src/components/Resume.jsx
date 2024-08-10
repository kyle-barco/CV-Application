import IntroPersonalInfoSection from "./personal-info/intro/IntroPersonalInfoSection"
import ExperienceInfoSection from "./personal-info/experience/ExperienceInfoSection"
import EducationInfoSection from "./personal-info/education/EducationInfoSection"
import ContactInfoSection from './personal-info/intro/ContactInfoSection'
import '../styles/resume.css'

const Resume = ({ personalInfo, sections }) => {
  return (
    <main className="resume-container">
      <IntroPersonalInfoSection
        profilePic={personalInfo.profilePicUrl}
        fullName={personalInfo.fullName}
        currPos={personalInfo.currentPosition}
        abtSelf={personalInfo.aboutSelf}
      />

      <div className="main-content">

        <ExperienceInfoSection
          experiences={sections.experiences}
        />
        <div className="contact-and-education-wrapper">

          <EducationInfoSection
            educations={sections.educations}
          />

          <ContactInfoSection
            email={personalInfo.email}
            mobileNum={personalInfo.phoneNumber}
            facebook={personalInfo.facebookAcc}
            website={personalInfo.websiteUrl}
          />
        </div>
      </div>
    </main>
  )
}

export default Resume
