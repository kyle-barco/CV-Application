import IntroPersonalInfoSection from "./personal-info/intro/IntroPersonalInfoSection"
import ExperienceInfoSection from "./personal-info/experience/ExperienceInfoSection"
import EducationInfoSection from "./personal-info/education/EducationInfoSection"
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
      <ExperienceInfoSection
        experiences={sections.experiences}
      />
      <EducationInfoSection
        educations={sections.educations}
      />

    </main>
  )
}

export default Resume
