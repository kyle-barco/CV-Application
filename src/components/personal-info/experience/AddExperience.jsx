import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import ExpandSection from "../../ExpandSection"
import DisplayForm from "../../DisplayForm"
import ExperienceInfoForm from "./ExperienceInfoForm"
import CreateForm from "../../CreateForm"

const AddExperience = ({
  experiences,
  isOpen,
  onChange,
  createForm,
  setOpen,
  onCancel,
  toggleCollapsed,
  onRemove
}) => {
  return (
    <div className="add-experience-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Experience"
        iconName={faBriefcase}
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForm
          forms={experiences} 
          FormComponent={ExperienceInfoForm}
          onChange={onChange} 
          onCancel={onCancel}
          onRemove={onRemove} 
          toggleCollapsed={toggleCollapsed}
          titleKey="companyName"
          arrayName="experiences"
        />
        <CreateForm onClick={createForm} buttonText="Experience"/>
      </div>
    </div>
  )
}

export default AddExperience
