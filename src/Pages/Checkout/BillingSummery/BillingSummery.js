import React from 'react'
import classes from "./Billing.module.css"
import Button from '../../../Components/Button/button'

function BillingSummery() {
   return (
         <div className={classes.billing_summery}>
            <div className="p-4">
               <p className={classes.billing_title}>Billing Summery</p>
               <p className={classes.promo_title}>Promo Code</p>
               <div className={classes.promo_items}>
                  <div className={classes.promo_input}>
                     <input type="text" />
                     <p className={classes.valid_promo}># Enter valid promo code</p>
                  </div>
                  <div className={classes.apply_btn}>
                     <Button title="Apply" />
                  </div>
               </div>
               <div className="d-flex justify-content-between">
                  <div>
                     <p className={classes.cupon_title} >Product Cost(5)</p>
                     <p className={classes.cupon_title}>Shipping free</p>
                     <p className={classes.cupon_title}>Premium Coupons</p>
                  </div>
                  <div >
                     <p className={classes.cupon_value}>$150.00</p>
                     <p className={classes.cupon_value}>$50.00</p>
                     <p className={classes.cupon_value}>-$15.00</p>
                  </div>
               </div>
               <hr style={{ background: '#CACDD8' }} />
               <div className="d-flex justify-content-between">
                  <div>
                     <p className={classes.total_payment}>Total Payment</p>
                  </div>
                  <div>
                     <p className={classes.total_amount}>$185.00</p>
                  </div>
               </div>
               <br />
               <div className={classes.checkoutBtn}>
                  <Button title="Checkout >>" />
               </div>  
            </div>
         </div>
   )
}

export default BillingSummery
