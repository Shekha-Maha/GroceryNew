import React from "react";
import classes from "./FooterPage.module.css";
import applestore from "../../Asset/applestore.png";
import visa from "../../Asset/visa.png";
import playstore from "../../Asset/playstore.png";

const FooterPage = () => {
   return (
      <div className={`mt-5 ${classes.footer}`}>
         <div className="container ">
            <div className={`row ${classes.footerContainer}`}>
               <div className={`col mt-3 ${classes.footerInstall}`}>
                  <p className={classes.install}>Install App</p>
                  <div className={classes.storeApp}>
                     <img src={playstore} alt="playstore" />
                  </div>
                  <div className={classes.storeApp}>
                     <img src={applestore} alt="applestore" />
                  </div>
               </div>
               <div className={`col mt-3 ${classes.footerInfo}`}>
                  <p className={classes.title}>Information</p>
                  <div className={classes.listContainer}>
                     <li>About Us</li>
                     <li>Privacy Policy</li>
                     <li> Terms & Condition</li>
                     <li>Orders & Returns</li>
                     <li>Contact Us</li>
                     <li>Career</li>
                  </div>
               </div>
               <div className={`col mt-3 ${classes.footerInfo}`}>
                  <p className={classes.title}>Address</p>
                  <div className={classes.address}>
                     <p>Address : 1234 Street Adress City Address, 1234</p>
                     <p className={classes.phone}>
                        Phones: <span>(00) 1234 5678</span>
                     </p>
                     <p>
                        We are open: Monday-Thursday: 9:00 AM - 5:30 PM <br />
                        Friday: 9:00 AM - 6:00 PM <br />
                        Saturday: 11:00 AM - 5:00 PM
                     </p>

                     <p className={classes.email}>
                        E-mail: <a href="shop@email.com">shop@email.com</a>
                     </p>
                  </div>
               </div>
            </div>

            <div className={classes.payments}>
               <img src={visa} alt="visa" />
               <img src={visa} alt="visa" />
               <img src={visa} alt="visa" />
               <img src={visa} alt="visa" />
               <img src={visa} alt="visa" />
               <img src={visa} alt="visa" />
               <img src={visa} alt="visa" />
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
               <p className="fs-6">Follow Us</p>
               <div className={`d-flex mt-2 ${classes.social}`}>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter-square mx-2"></i>
                  <i className="fab fa-youtube-square"></i>
               </div>
            </div>

            <p className={classes.copyWrite}>
               @ e-commerce.com 2020-2025 All rights reserved
            </p>
         </div>
      </div>
   );
};

export default FooterPage;
