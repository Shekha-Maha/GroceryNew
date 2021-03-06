import React, { useState } from 'react'
import classes from "./WithSearch.module.css"
import Logo from "../../../Asset/mainlogo.png"
import Drawer from "../../../Asset/drawer.png"
import User from '../../../Asset/user.png'
import { Link } from 'react-router-dom'
import Searchbar from '../../SearchBar/Searchbar'
import Profiles from '../../../Pages/Account/Profile/Profile'

function TopNavWithSearch(props) {

   const [profileShow, setProfileShow] = useState(false)

   return (
      <div className={classes.topnav}>
         <div className="container-fluid">
            <div className="row ">
               <div className={classes.navbar + " col-12 d-flex align-items-center "}>
                  <button onClick={props.sidebarFun} className={classes.drawer_btn}>
                     <img className='img-fluid' src={Drawer} alt="Drawer" />
                  </button>
                  <Link to='/'>
                     <img className={classes.logo + ' img-fluid'} src={Logo} alt="logo" />
                  </Link>
                  <div className={classes.search_bar}>
                     <Searchbar />
                  </div>
                  <div className='ms-auto'>
                     <div onClick={() => setProfileShow(!profileShow)} className={classes.user_log}>
                        <img className={classes.user + ' img-fuid'} src={User} alt="user" />
                        <p>Account</p>
                     </div>
                  </div>
                  <div className={profileShow ? classes.profileModal : "d-none"}>
                     <Profiles profileShow={profileShow} setProfileShow={setProfileShow} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default TopNavWithSearch
