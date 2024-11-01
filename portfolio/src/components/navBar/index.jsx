import React, { useState } from 'react'
import { FaReact, FaBars } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './styles.scss'

const data = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Portfolio',
    to: '/portfolio',
  },
  {
    label: 'Resume',
    to: '/resume',
  },
  {
    label: 'Skills',
    to: '/skills',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
]

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false)

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon)
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={'./'} className="navbar__container__logo">
            <FaReact size={60} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={50} /> : <FaBars size={50} />}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
