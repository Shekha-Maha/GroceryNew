import React from "react";
import classes from "./Paymethod.module.css";
import Visa from "../../../Asset/visa.png";
import American from "../../../Asset/american.png";
import Mastercard from "../../../Asset/mastercard.png";

function PaymentMethod() {
   return (
      <div className={classes.paymentInfo}>
         <p className={classes.methodTitle}>Payment Method</p>
         <label className={classes.cashOne} activeClassName={classes.visited}>
            <input type="radio" id="cash" name="payment" value="cash" />
            <span className="ps-3">
               <p className={classes.debit}>Credit/Debit Card</p>
               <p className={classes.time}>Processing time 2-4 hours</p>
            </span>
            <span className="ps-3">
               {" "}
               <img className={classes.method} src={Mastercard} alt="mastercard" />
            </span>
            <span className="ps-3">
               {" "}
               <img className={classes.method} src={Visa} alt="visa" />
            </span>
            <span className="ps-3">
               {" "}
               <img className={classes.method} src={American} alt="amrerican" />{" "}
            </span>
         </label>
         <label className={classes.cashTwo} activeClassName={classes.visited}>
            <input type="radio" id="cash" name="payment" value="cash" />
            <span>
               <p className={classes.cashOn}>Cash On Delivery</p>
            </span>
         </label>
         <label className={classes.cashTwo} activeClassName={classes.visited}>
            <input type="radio" id="cash" name="payment" value="cash" />
            <span>
               <p className={classes.cashOn}>Bkash</p>
            </span>
         </label>
         <label className={classes.cashTwo} activeClassName={classes.visited}>
            <input type="radio" id="cash" name="payment" value="cash" />
            <span>
               <p className={classes.cashOn}>Nagad</p>
            </span>
         </label>
         <label className={classes.cashTwo} activeClassName={classes.visited}>
            <input type="radio" id="cash" name="payment" value="cash" />
            <span>
               <p className={classes.cashOn}>Rocket</p>
            </span>
         </label>
      </div>
   );
}

export default PaymentMethod;
