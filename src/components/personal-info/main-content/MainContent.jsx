import ExperienceInfoSection from "../experience/ExperienceInfoSection"
import EducationInfoSection from "../education/EducationInfoSection"
import ContactInfoSection from "../intro/ContactInfoSection"

const MainContent = ({
  email,
  website,
  facebook,
  mobileNum,
  schoolName,
  degree,
  location,
  schoolStartDate,
  schoolEndDate,
  companyName,
  positionTitle,
  jobDescription,
  jobStartDate,
  jobEndDate
}) => {
  return (
    <div className="main-content">
      <ExperienceInfoSection
        companyName={companyName}
        positionTitle={positionTitle}
        jobDescription={jobDescription}
        jobStartDate={jobStartDate}
        jobEndDate={jobEndDate}
      />
      <div className="contact-and-education-wrapper">
        <EducationInfoSection
          schoolName={schoolName}
          degree={degree}
          location={location}
          schoolStartDate={schoolStartDate}
          schoolEndDate={schoolEndDate}
        />

        <ContactInfoSection
          email={email}
          mobileNum={mobileNum}
          facebook={facebook}
          website={website}
        />

      </div>
    </div>
  )
}

export default MainContent
