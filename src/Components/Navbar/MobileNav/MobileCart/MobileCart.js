import React, { useState } from 'react'
import classes from './Mobilecart.module.css'
import CartIcon from "../../../../Asset/cart.png"
import MyCart from "../../../../Pages/MyCart/MyCart"
import { useHistory } from "react-router-dom"

const MobileCart = () => {
   const [showMyCart, setShowMyCart] = useState(false)
   // const history = useHistory()

   // const goToCheckout = (props) => {
   //    setShowMyCart(false)
   //    history.push("/checkout")
   // }

   return (

      <>
         {showMyCart && <div className={classes.bodyOverlay} onClick={() => setShowMyCart(false)} ></div>}
         <div onClick={() => setShowMyCart(!showMyCart)} className="d-flex">
            <div className={showMyCart ? classes.cartProductsContainer : "d-none"}>
               <MyCart setShowMyCart={setShowMyCart} />
            </div>
            <div className={classes.notification}>
               <p >155</p>
            </div>
            <button className={classes.cart_btn}>
               <img className={classes.user + " img-fuid"} src={CartIcon} alt="cart-icon" />
            </button>
         </div>
      </>
   )
}

export default MobileCart
