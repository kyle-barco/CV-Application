import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"

const ContactInfoSection = ({
  email,
  mobileNum,
  facebook,
  website
}) => {
  return (
    <div className="contact-resume">
      <div className="title-resume"><FontAwesomeIcon icon={faAnglesRight} className="angles-right" /> Contact</div>
      <table>
        <tbody>
          <tr>
            <td>Email:</td>
            <td className="input-value">{email}</td>
          </tr>
          <tr>
            <td>Mobile:</td>
            <td className="input-value">{mobileNum}</td>
          </tr>
          <tr>
            <td>Facebook:</td>
            <td className="input-value">{facebook}</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td className="input-value">{website}</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default ContactInfoSection 
