import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const Buttons = ({ save, cancel, remove }) => {
  return (
    <div className="buttons">
      <button className="delete" onClick={remove}>
        <FontAwesomeIcon icon={faTrash} />
        Delete
      </button>
      <div className="main-buttons">
        <button className="cancel" onClick={cancel}>Cancel</button>
        <button className="save" onClick={save}>Save</button>
      </div>
    </div>
  )
}

export default Buttons
