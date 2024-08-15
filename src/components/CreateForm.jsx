import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CreateForm = ({ onClick, buttonText, iconName}) => {
  return (
    <button
      className="create-form"
      onClick={onClick}
    >
      <h4 className="buttonContent">
        <FontAwesomeIcon icon={iconName}/> 
        {buttonText}
      </h4>
    </button>
  )
}

export default CreateForm

