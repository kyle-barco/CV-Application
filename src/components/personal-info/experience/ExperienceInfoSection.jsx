import ExperienceInfo from "./ExperienceInfo";
import DisplaySection from "../../DisplaySection";

const ExperienceInfoSection = ({ experiences }) => {
  return (
    <>
      <DisplaySection
        array={experiences}
        InfoComponent={ExperienceInfo}
        title={"Experiences"}
      />
    </>

  )
}

export default ExperienceInfoSection
