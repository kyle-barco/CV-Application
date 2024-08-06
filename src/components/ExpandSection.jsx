import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExpandSection = ({ setOpen, isOpen, sectionName, iconName }) => {

  return (
    <button
      className="expand-section"
      onClick={() => setOpen(isOpen ? "" : sectionName)}
    >
      <h2 className="expand-section-header">
        {sectionName}
      </h2>
      <FontAwesomeIcon icon={iconName} className={`icons ${isOpen ? "open" : ''}`} />
    </button>
  )
}

export default ExpandSection
