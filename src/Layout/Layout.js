
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import SideNav from "../Components/SideNav/SideNav";
import LoginPage from "../Pages/Account/LoginPage";
import SignUpPage from "../Pages/Account/SignUpPage";
import CustomerDashBoard from "../Pages/CustomerDashBoard/CustomerDashBoard";
import HomePage from "../Pages/Home/HomePage";
import OrderHistoryPage from "../Pages/OrderHistory/OrderHistoryPage";
import ProductAll from "../Pages/ProductAll/productAll";
import ProductView from "../Pages/ProductView/productView";
import Profile from "./../Pages/Account/Profile/Profile"
import classes from "./Layout.module.css"
import MobileNav from "../Components/Navbar/MobileNav/MobileNav.js"
import TopNavWithoutSearch from "../Components/Navbar/TopNavWithoutSearch/TopNavWithoutSearch";
import CheckOut from "../Pages/Checkout/CheckOut";
import FooterPage from "../Pages/Footer/FooterPage";
import AddToCard from "../Pages/AddToCard/AddToCard";
import TopNavWithSearch from "../Components/Navbar/TopNavWithSearch/TopNavWithSearch";


function Layout() {
   const [sideBarOn, setSidebarOn] = useState(false)
   return (
      <>
         {/* <div className={classes.topbar + " d-none d-lg-block"}>
            <TopNavWithoutSearch sidebarFun={() => setSidebarOn(!sideBarOn)} />
         </div> */}
         <div className={classes.topbar + " d-none d-lg-block"}>
            <TopNavWithSearch sidebarFun={() => setSidebarOn(!sideBarOn)} />
         </div>
         <div className={classes.topbar + ' d-blok d-lg-none'}>
            <MobileNav />
         </div>
         <div className="container-fluid">
            <div className={classes.customBody}>
               <div className={classes.sidebarStyle + " " + (sideBarOn ? classes.showSidebar : classes.hideSidebar)}>
                  <SideNav />
               </div>
               <div className={sideBarOn ? classes.push : classes.mainScreen}>
                  <div className={classes.ShowCard}>
                     <AddToCard />
                  </div>
                  <Switch >
                     <Route exact path='/'><HomePage /></Route>
                     <Route exact path='/profile'><Profile /></Route>
                     <Route path='/product/all'><ProductAll /></Route>
                     <Route path='/productview'><ProductView /> </Route>
                     <Route path="/customer/dashboard/"><CustomerDashBoard /> </Route>
                     <Route path="/account/login" ><LoginPage /></Route>
                     <Route path="/account/signup"><SignUpPage /> </Route>
                     <Route path="/checkout"><CheckOut /></Route>
                     <Route path="/orderHistory"><OrderHistoryPage /> </Route>
                     <Route path="/mycart"><OrderHistoryPage /> </Route>
                     <Route path='/'> </Route>
                     <Redirect to="/" />
                  </Switch>
                  <FooterPage />
               </div>
            </div>
         </div>


      </>
   );
}

export default Layout;