import ExperienceInfo from "./ExperienceInfo";
import DisplaySection from "../../DisplaySection";

const ExperienceInfoSection = ({ experiences }) => {
  return (
    <div className="job-experience">
      <DisplaySection
        array={experiences}
        InfoComponent={ExperienceInfo}
        title={"Experiences"}
      />
    </div>

  )
}

export default ExperienceInfoSection
