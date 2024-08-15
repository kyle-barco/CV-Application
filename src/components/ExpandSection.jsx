import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import "../styles/forms.css"

const ExpandSection = ({ isOpen, setOpen, sectionName, iconName }) => {
  return (
    <button
      className="expand-section"
      onClick={() => setOpen(isOpen ? "" : sectionName)}
    >
      <h2 className="expand-section-header">
        <FontAwesomeIcon icon={iconName} />
        {sectionName}
      </h2>
      <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className='chevron icons' />

    </button>
  )
}

export default ExpandSection
