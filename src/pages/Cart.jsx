import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";
import { clearItem} from "../features/cartSlise";
import styles from "../sass/pages/cart.module.sass";

const Cart = () => {
  const { totalPrice, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onClickClear = () => {
    if (window.confirm("Очистить корзину?")) {
      dispatch(clearItem());
    }
  };

  return (
    <div className={styles.cart_body}>
      <div className={styles.product_body}>
        <div className={styles.header_cart}>
          <span>Товар</span>
          <span>Кол-во</span>
        </div>

        <div className={styles.cart_item}>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <span onClick={onClickClear} className={styles.nav_footer}>
          Очистить корзину
        </span>
        <Link to="/">
          <span className={styles.nav_footer_2}>Продолжить покупки</span>
        </Link>
      </div>
      <div className={styles.order}>
        <form>
          <h2>Оформление заказа</h2>
          <input type="text" placeholder="Имя Фамилия" />
          <input type="number" placeholder="+7904 000 80 80" />
          <input type="text" placeholder="Адрес доставки" />
          <span>Итого: {totalPrice} руб.</span>
          <button>Оформить заказ</button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
