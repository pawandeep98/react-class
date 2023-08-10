import React from 'react'
import './index.css'
// import { BsCartFill } from 'react-icons/fa'; 

function HeaderComponent() {
  return (
    
    <>
    <nav className='main-nav'>
        <div className='logo-apollo'>
            <img src="https://pbs.twimg.com/profile_images/1266382368039776256/lUYC2Ty-_400x400.jpg" width="100%" height="auto"/>
        </div>
        <div className='location'>
            location
        </div>
        <div className='menu-link'>
           <ul>
            <li>
            < a href="#">
                Consult<hr/> Consult Online
            </a>
            </li>
            <li>
            < a href="#">
                Medicines<hr/>Medicine &<br/> Other Products
            </a>
            </li>
            <li>
            < a href="#">
                Lab Tests<hr/>Health<br/> Checkups
            </a>
            </li>
            <li>
            < a href="#">
                Health Records<hr/>Lab Reports &<br/>Consultations
            </a>
            </li>
            <li>
            < a href="#">
                Circle<hr/>Free Delivery <br/> & Cashbacks
            </a>
            </li>
             </ul>
        </div>

        {/* <div className='cart'> */}
        {/* <BsCartFill/> */}
        {/* </div> */}
        <div className='Profile'>
         cart |  profile
        </div>
    </nav>


    
    </>
  )
}

export default HeaderComponent