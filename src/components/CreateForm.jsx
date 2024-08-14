const CreateForm = ({ onClick, buttonText }) => {
  return (
    <button
      className="create-form"
      onClick={onClick}
    >
      <h4 className="buttonContent">
        {buttonText}
      </h4>
    </button>
  )
}

export default CreateForm

