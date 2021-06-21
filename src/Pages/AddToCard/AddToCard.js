import classes from "./AddToCard.module.css"
import { useSelector } from "react-redux"
import Cart_image from "../../Asset/pic01.png"
import MyCart from "../MyCart/MyCart"
import { useRef, useState } from "react"
import { useHistory } from "react-router-dom"

const AddToCard = () => {
   const [showMyCart, setShowMyCart] = useState(false)
   const data = useSelector((state) => state.card)
   const history = useHistory()
   const modalRef = useRef(null)


   const goToCheckout = () => {
      setShowMyCart(false)
      history.push("/checkout")
   }

   window.addEventListener('click', (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
         setShowMyCart(false)
      }
   })
   return (
      <div ref={modalRef}>
         <div className={showMyCart ? classes.cartProductsContainer : "d-none"}>
            <MyCart setShowMyCart={setShowMyCart} onClicked={goToCheckout} />
         </div>
         <div onClick={() => setShowMyCart(true)} className={classes.cardContainer}>
            <div className={classes.product_view}>
               <img src={Cart_image} alt="cart_image" />
               <h1>{data.length} Items</h1>
            </div>
            <div className={classes.total_cart_price}>
               <h1>$1599</h1>
            </div>
         </div>

      </div>
   );
}

export default AddToCard;