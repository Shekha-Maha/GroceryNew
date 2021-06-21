import React from "react";
import classes from "./ContactInfo.module.css";
import Input from "../../../Components/Input/input";

function ContactInformation() {
   return (
      <div className={classes.contactInfo}>
         <div className={classes.information}>
            <p className={classes.contactTitle}>Contact Information</p>
            <div className={classes.formContainer}>
               <div className={classes.displayInputs}>
                  <div className={classes.singleInput}>
                     <Input varient="border" type="text" label="Contact Number" />
                  </div>
                  <div className={classes.singleInput}>
                     <Input varient="border" type="email" label="Email Address" />
                  </div>
               </div>
               <div className={classes.displayInputs}>
                  <div className={classes.singleInput}>
                     <Input varient="border" type="password" label="Password" />
                  </div>
                  <div className={classes.singleInput}>
                     <Input varient="border" type="password" label="Confirm Password" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ContactInformation;
