import { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom'
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import "./NavBar.scss"

const NavBar = () => {
    return (
      <>
        <div className='navigation'>
          <Link className='logo-container' to="/" >
            <CrownLogo className='logo' />
          </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop' >
                    <p>SHOP</p>
                </Link>
                <Link className='nav-link' to='/auth' >
                    <p>SIGN IN</p>
                </Link>
            </div>
        </div>
        <Outlet />
      </>
    )
  }

  export default NavBar;