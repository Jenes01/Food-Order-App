import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartitems}
      <div>
        <span className={classes.total}>Total Amount</span>
        <span>35.62</span>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
