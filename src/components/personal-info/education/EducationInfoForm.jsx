import InputGroup from '../../InputGroup'
import Buttons from '../../Buttons'

const EducationInfoForm = (props) => {
  const { schoolName, degree, location, startDate, endDate } = props.form
  const { onChange, cancel, save, remove } = props
  return (
    <div className="education-section form-item" >
      <form
        data-array-name="educations"
        id={id}
        className="education-form form-style section-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <InputGroup
          type="text"
          id="school-name"
          labelText="School"
          placeholder="Enter School/University"
          value={schoolName}
          onChange={onChange}
          data-key="schoolName"
        />
        <InputGroup
          type="text"
          id="degree"
          labelText="Course/Degree"
          placeholder="Enter Course/Degree"
          value={degree}
          onChange={onChange}
          data-key="degree"
        />
        <InputGroup
          type="text"
          id="location"
          labelText="Location"
          placeholder="Enter Location"
          value={location}
          onChange={onChange}
          data-key="location"
        />
        <div className="dates-group">
          <InputGroup
            type="text"
            id="startDate"
            labelText="Start Date"
            placeholder="Enter Start Date"
            value={startDate}
            onChange={onChange}
            data-key="startDate"
          />
          <InputGroup
            type="text"
            id="endDate"
            labelText="End Date"
            placeholder="Enter End Date"
            value={endDate}
            onChange={onChange}
            data-key="endDate"
          />
        </div>
        <Buttons cancel={cancel} save={save} remove={remove} />
      </form>
    </div>
  )

}

export default EducationInfoForm

