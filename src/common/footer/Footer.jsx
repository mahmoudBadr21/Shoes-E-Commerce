import './footer.css'
import { NavLink, Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content container flexBetween">
        <div className="footer-left">
          <h1>
            Are You Intersted
          </h1>

          <Link to={'/'}>Sopping Now <span className="circle"></span></Link>
        </div>

        <div className="footer-right">
          <div className="logo main-title">
            <Link to={'/'}><span className='spcial-letter'>S</span>hoes<span className='spcial-color'><span className='spcial-letter'>L</span>uxe</span></Link>
          </div>

          <div className="footer-links">
            <nav>
              <ul>
                <li>
                  <NavLink to={"/sale"} className={({isActive}) => isActive ? "active-link" : ""}>Sale</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"} className={({isActive}) => isActive ? "active-link" : ""}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"} className={({isActive}) => isActive ? "active-link" : ""}>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer