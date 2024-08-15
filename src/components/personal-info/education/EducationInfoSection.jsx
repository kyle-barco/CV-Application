import EducationInfo from "./EducationInfo";
import DisplaySection from "../../DisplaySection";

const EducationInfoSection = ({ educations }) => {
  return (
    <div className="education resume-section">
      <DisplaySection
        array={educations}
        InfoComponent={EducationInfo}
        title="Education"
      />
    </div>
  )
}

export default EducationInfoSection
