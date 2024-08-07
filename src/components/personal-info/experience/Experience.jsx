import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import uniqid from 'uniqid'

const Experience = ({ handleData, data }) => {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="experience-section">
      <button
        onClick={() => setClicked(!clicked)}
        className="expand-section"
      >
        <h2>Job Experience</h2>
        <FontAwesomeIcon icon={clicked ? faChevronUp : faChevronDown} />
      </button>
      <div className={`section-content ${clicked ? 'open' : ''}`}>
        <form
          data-array-name='experiences'
          id={uniqid()}
          action=""></form>
      </div>


    </div>
  )
}
export default Experience
