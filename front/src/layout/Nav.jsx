import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.scss"
function Nav() {
  return (
    <div className='mainnav'>
    <div className="logo">
      <img src="https://preview.colorlib.com/theme/florist/img/logo.png.webp" alt="" />
    </div>
    <div className='nav'>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/detail/:id">Detail Page</Link>
          </li>
          <li>
            <Link to="/wish">Wishlist Page</Link>
          </li>
          <li>
            <Link to="/add">Add Page</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className='icon'><i class="fa-solid fa-bars"></i></div>
    </div>
  )
}

export default Nav
