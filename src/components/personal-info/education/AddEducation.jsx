import DisplayForm from "../../DisplayForm";
import ExpandSection from "../../ExpandSection";
import CreateForm from "../../CreateForm";
import EducationInfoForm from "./EducationInfoForm";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const AddEducation = ({
  educations,
  isOpen,
  onChange,
  createForm,
  setOpen,
  onCancel,
  toggleCollapsed,
  onRemove
}) => {

  return (
    <div className="add-education-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Education"
        iconName={faGraduationCap}
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForm
          forms={educations}
          FormComponent={EducationInfoForm}
          onChange={onChange}
          onCancel={onCancel}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          titleKey="schoolName"
          arrayName="educations"
        />
        <CreateForm onClick={createForm} buttonText="Add Education" />
      </div>
    </div>
  )
}

export default AddEducation
