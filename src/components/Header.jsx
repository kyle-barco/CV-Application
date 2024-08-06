import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Header = () => {
  return (
    <>
      <div className="header container">
        <h1>CV Application Project</h1>
        <div className="socials">
          <ul>
            <li className="icons">
              <a href="https://github.com/kyle-barco" target="_blank">
                <FontAwesomeIcon icon={faGithub} className='icons gitihub-icon'/>

              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
