import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import './styles/resume.css'

const DisplaySection = ({ array, InfoComponent, title }) => {
  return (
    <>
      <div className="title-resume"><FontAwesomeIcon icon={faAnglesRight} className="angles-right" /> {title}</div>
      {array.map(
        info => <InfoComponent info={info} key={info.id} />
      )}
    </>

  )
}

export default DisplaySection
