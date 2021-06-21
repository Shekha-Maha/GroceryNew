import React, { useState } from 'react'
import classes from "./MobileNav.module.css"
import Logo from "../../../Asset/mainlogo.png"
import Drawer from "../../../Asset/drawer.png"
import Profile from '../../../Asset/mobileProfile.png'
import Search from "../../../Asset/mobile-search.png"
import { Link } from 'react-router-dom'
import Profiles from "../../../Pages/Account/Profile/Profile.js"
import MobileCart from "./MobileCart/MobileCart"


function MobileNav() {

   const [profileShow, setProfileShow] = useState(false)

   return (
      <>
         <div className={classes.topnav}>
            <div className="container-fluid">
               <div className="row ">
                  <div className={classes.navbar + " col-12 d-flex align-items-center"}>
                     <div className={classes.partOne}>
                        <button className={classes.all_btn}>
                           <img className='img-fluid' src={Drawer} alt="Drawer" />
                        </button>
                        <Link to='/'>
                           <img className={classes.logo + ' img-fluid'} src={Logo} alt="logo" />
                        </Link>
                     </div>

                     <div className={classes.partTwo}>
                        < button className={classes.all_btn}>
                           <img className="img-fuid" src={Search} alt="search" />
                        </button>
                        <MobileCart />

                        <button onClick={() => setProfileShow(!profileShow)} className={classes.all_btn}>
                           <img className="img-fuid" src={Profile} alt="profile" />
                        </button>
                        <div className={profileShow ? classes.profileModal : "d-none"}>
                           <Profiles profileShow={profileShow} setProfileShow={setProfileShow} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default MobileNav
