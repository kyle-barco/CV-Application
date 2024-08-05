import { useState } from "react"
import InputGroup from "../../InputGroup"

const IntroPersonalInfoForm = ({ onChange, profilePic, fullName, currPos, abtSelf }) => {
  const [file, setFile] = useState()

  function handleFileChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]))
  }


  return (
    <form action="" className="intro-personal" >
      <h2>Personal Information</h2>
      <InputGroup
        type="file"
        value={profilePic}
        data-key="profilePic"
        accept="image/"
        id="file"
        onChange={handleFileChange}
      />
      <InputGroup
        type="text"
        labelText="Full Name"
        data-key="fullName"
        value={fullName}
        onChange={onChange}
        placeholder="Enter Full Name"
      />
      <InputGroup
        type="text"
        data-key="currentPosition"
        labelText="Current Position"
        placeholder="what is your current position/job?"
        value={currPos}
        onChange={onChange}
      />

      <InputGroup
        type="textarea"
        data-key="aboutSelf"
        labelText="Bio"
        placeholder="tell about yourself..."
        value={abtSelf}
        onChange={onChange}
      />
    </form>
  )

}

export default IntroPersonalInfoForm
