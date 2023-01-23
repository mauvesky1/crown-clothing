import { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom'

const NavBar = () => {
    return (
      <>
        <div className='navigation'>
            <div>Logo</div>
            <div className='nav=links-container'>
                <Link className='nav-link' to='/shop' >
                    <h1>SHOP</h1>
                </Link>
            </div>
        </div>
        <Outlet />
      </>
    )
  }

  export default NavBar;