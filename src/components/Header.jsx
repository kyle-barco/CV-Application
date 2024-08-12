import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import '../styles/header.css'

const Header = ({handlePrint}) => {
  return (
    <>
      <header className="header">
        <h1>CV Application Project</h1>
        <div className="socials">
          <ul>
            <li className="icons">
              <FontAwesomeIcon onClick={handlePrint} icon={faDownload} />

            </li>
            <li className="icons">
              <a href="https://github.com/kyle-barco" target="_blank">
                <FontAwesomeIcon icon={faGithub} className='icons gitihub-icon' />

              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
