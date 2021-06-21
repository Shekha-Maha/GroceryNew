import React from 'react'
import classes from "./Shippingadd.module.css"
import Input from '../../../Components/Input/input'
import SelectedInput from '../../../Components/SelectedInput/selectedInput'

function ShippingAddress() {
   const cityList = ["Dhaka", "Kolkata", "shylet"]
   const areaList = ["Dhaka", "Kolkata", "shylet"]

   return (
      <>
         <div className='px-5 pt-3 pb-2'>
            <p className={classes.shipping_info}>Shipping Info</p>
            <div className={classes.formContainer}>
               <div className={classes.displayInputs}>
                  <div className={classes.singleInput} >
                     <Input varient="border" label="First Name" />
                  </div>
                  <div className={classes.singleInput} >
                     <Input varient="border" label="Last Name" />
                  </div>
               </div>

               <div className={classes.displayInputs}>
                  <div className={classes.singleInput}>
                     <SelectedInput id="cityInput" type="modal" defaultValue="Select City" options={cityList} />
                  </div>
                  <div className={classes.singleInput}>
                     <SelectedInput id="area" type="modal" defaultValue="Select Area" options={areaList} />
                  </div>
               </div>
               <div className={classes.singleInput} >
                  <Input varient="border" label="Phone Number" />
               </div>
               <div className={classes.singleInput} >
                  <Input varient="border" type="text" label="Full Address" />
               </div>
               <div className={classes.singleInput} >
                  <Input varient="border" type="email" label="Your Email" />
               </div>
            </div>
         </div >
      </>
   )
}

export default ShippingAddress

