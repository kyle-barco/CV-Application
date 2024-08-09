import EducationInfo from "./EducationInfo";
import DisplaySection from "../../DisplaySection";

const EducationInfoSection = ({educations}) => {
  return (
    <>
      <DisplaySection
        array={educations}
        InfoComponent={EducationInfo}
        title="Education"
      />
    </>
  )
}

export default EducationInfoSection
