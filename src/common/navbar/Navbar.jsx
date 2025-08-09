import { NavLink, Link } from 'react-router-dom'
import './navbar.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { motion } from 'framer-motion';

const Navbar = ({ isTopOfPage, setShowLogin, showLogin }) => {
  const { cartLength } = useContext(StoreContext)

  return (
    <section className={`navbar ${isTopOfPage ? "" : "spcBackground"}`}>
      <div className="nav-upper flexBetween">
        <motion.div
          className="logo main-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.02, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Link to={"/"}>
            <span className="spcial-letter">S</span>hoes
            <span className="spcial-color">
              <span className="spcial-letter">L</span>uxe
            </span>
          </Link>
        </motion.div>

        <div className="searchBar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search ..." />
        </div>

        <div className="other-icons">
          <i
            onClick={() => setShowLogin(true)}
            className={`fa fa-user icon-circle ${
              showLogin ? "active-nav" : ""
            }`}
          ></i>
          <NavLink
            to={"/favorits"}
            className={({ isActive }) => (isActive ? "active-nav" : "")}
          >
            <i className="fas fa-heart"></i>
          </NavLink>
          <div className="cart-icon">
            <NavLink
              to={"/cart"}
              className={({ isActive }) => (isActive ? "active-nav" : "")}
            >
              <i className="fa fa-shopping-bag icon-circle"></i>
            </NavLink>
            <span>{cartLength == 0 ? "" : cartLength}</span>
          </div>
        </div>
      </div>

      <div className="nav-lawer">
        <nav>
          <ul className="flexBetween">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                <span className="spcial-letter">H</span>ome
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/category/men"}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                <span className="spcial-letter">M</span>en
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/category/women"}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                <span className="spcial-letter">W</span>omen
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/category/sport"}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                <span className="spcial-letter">S</span>port
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navbar