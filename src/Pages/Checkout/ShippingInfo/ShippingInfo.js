import React, { useState } from 'react'
import classes from './ShippingInfo.module.css'
import Edit from "../../../Asset/small_edit.png"
import Plus from "../../../Asset/plus.png"
import ShippingAddress from "../ShippingAddress/ShippingAddress.js"
import Cross from "../../../Asset/cross.png"

function ShippingInfo() {
   const [address, setAddaddress] = useState(false);

   const outSideClick = (e) => {
      if (document.getElementById("modalContainer") && address && !document.getElementById("modalContainer").contains(e.target)) {
         setAddaddress(false)
      }
   };

   return (
      <>
         <div onClick={outSideClick} className={address ? classes.address_modal_blur : "d-none"}  >
            <div className={classes.address_modal} id="modalContainer" >
               <div className={classes.image_btn}>
                  <button onClick={() => setAddaddress(!address)} className={classes.image}>
                     <img src={Cross} alt="cross" />
                  </button>
               </div>
               <ShippingAddress />
               <div className={classes.add_btn} >
                  <button onClick={() => setAddaddress(!address)}>Add</button>
               </div>
            </div>
         </div>
         <div className={classes.shipping}>
            <p className={classes.shipping_title}>Shipping Address</p>
            <div className={classes.shipping_div}>
               <div className={classes.address} >
                  <div className={classes.address_details}>
                     <p className={classes.address_name}>Md. Zahid Hossain</p>
                     <p className={classes.address_number}>01782347942 </p>
                     <p className={classes.address_address}>Floor no 08, House No #20,<br /> Rode no #18 Nikunja 2,<br /> Khilkhet,  Dhaka North </p>
                  </div>
                  <div className={classes.edit}>
                     <button className={classes.edit_btn}>
                        Edit
                        <img src={Edit} alt='edit' />
                     </button>
                  </div>

                  <label className={classes.container}>
                     <input type="checkbox" />
                     <span className={classes.checkmark}></span>
                  </label>
               </div>
               <div className={classes.address}>
                  <div className={classes.address_details}>
                     <p className={classes.address_name}>Md. Zahid Hossain</p>
                     <p className={classes.address_number}>01782347942 </p>
                     <p className={classes.address_address}>Floor no 08, House No #20,<br /> Rode no #18 Nikunja 2,<br /> Khilkhet,  Dhaka North </p>
                  </div>
                  <div className={classes.edit}>
                     <button className={classes.edit_btn}>
                        Edit
                        <img src={Edit} alt='edit' />
                     </button>
                  </div>

                  <label className={classes.container}>
                     <input type="checkbox" />
                     <span className={classes.checkmark}></span>
                  </label>
               </div>

               <button onClick={() => setAddaddress(!address)} className={classes.add}>
                  <div className={classes.plus}>
                     <img src={Plus} alt='plus' />
                  </div>
                  Add Address
               </button>
            </div>
         </div>



      </>
   )
}

export default ShippingInfo
