import InputGroup from "../../InputGroup"
import Buttons from "../../Buttons"

const ExperienceInfoForm = (props) => {
  const { companyName, positionTitle, description, startDate, endDate, id } = props.form
  const { onChange, cancel, save, remove } = props

  return (
    <div className="experience-section form-item">
      <form
        data-array-name='experiences'
        className="experience-form form-style section-form"
        id={id}
        onSubmit={(e) => e.preventDefault()}
        action="">
        <InputGroup
          type="text"
          labelText="Company Name"
          id="company-name"
          onChange={onChange}
          value={companyName}
          placeholder="Enter Company name"
          data-key="companyName"
        />
        <InputGroup
          type="text"
          labelText="Position Title"
          id="position-title"
          onChange={onChange}
          value={positionTitle}
          placeholder="Enter Position title"
          data-key="positionTitle"
        />
        <InputGroup
          type="textarea"
          labelText="Job Description"
          id="job-description"
          onChange={onChange}
          value={description}
          placeholder="Enter Job description"
          data-key="description"
        />
        <div className="dates-group">
          <InputGroup
            type="text"
            labelText="Start Date"
            id="start-date"
            onChange={onChange}
            value={startDate}
            placeholder="when did you start?"
            data-key="startDate"
          />
          <InputGroup
            type="text"
            labelText="End Date"
            id="end-date"
            onChange={onChange}
            value={endDate}
            placeholder="when it end?"
            data-key="endDate"
          />
        </div>
        <Buttons cancel={cancel} save={save} remove={remove} />
      </form >
    </div >
  )
}
export default ExperienceInfoForm
