import { useState } from "react"


const Intro = () => {
  const [fullName, setFullName] = useState('Kyle Barco')

  const handleFullName = (e) => {
    setFullName(e.target.value)
  }

  return (
    <>
      <div className="form-intro">
        <input
          type="file"
          accept="image/"
        />
        <input
          value={fullName}
          onChange={handleFullName}
          placeholder="full name"
          type="text" />
        <input
          placeholder="current position"
          type="text" />
        <textarea
          placeholder="tell something about yourself..."
        />
      </div>
    </>
  )
}

export default Intro
