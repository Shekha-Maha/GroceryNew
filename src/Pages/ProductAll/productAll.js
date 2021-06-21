import classes from "./productAll.module.css"
import Cart from "../../Components/Cart/cart"
import SelectedInput from "../../Components/SelectedInput/selectedInput"

const ProductAll = () => {

   const productTypes = ["one", "two", "three"]
   const shipsTypes = ["one", "two", "three"]
   const sortTypes = ["New Arival", "Price Low To Heigh", "Price Heigh To Low", "Discount"]

   return (
      <div className={classes.productAll}>
         <div className={classes.selectFormComponents}>
            <SelectedInput type="modal" defaultValue="Select Product Type" options={productTypes} />
            <SelectedInput type="modal" defaultValue="Ships Form" options={shipsTypes} />
            <SelectedInput type="modal" defaultValue="Sort By" options={sortTypes} />
         </div>

         <div className={classes.displayCart}>
            <div className={classes.signleCart}>
               <Cart />
            </div>
            <div className={classes.signleCart}>
               <Cart />
            </div>
            <div className={classes.signleCart}>
               <Cart />
            </div>
            <div className={classes.signleCart}>
               <Cart />
            </div>
            <div className={classes.signleCart}>
               <Cart />
            </div>
            <div className={classes.signleCart}>
               <Cart />
            </div>
            <div className={classes.signleCart}>
               <Cart />
            </div>
         </div>

      </div>

   );
}

export default ProductAll;