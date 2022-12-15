import React from "react";
import styles from "../CartItem/cartitem.module.sass";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../features/cartSlise";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";


const CartItem = ({ count, id, price, name, description, image }) => {
  const dispatch = useDispatch();


  const onClickPlus = () => {
    if (count !== 3) {
      dispatch(
        addItem({
          id,
        })
      );
    }
  };

  const onClickMinus = () => {
    if (count !== 0) {
      dispatch(minusItem(id));
    }
  };

  const onClickRemove = () => {
    if (window.confirm("Ты действительно хочешь удалить товар?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div>
      <hr />
      <div className={styles.product}>
        <div>
          <img src={image} />
        </div>
        <div className={styles.desc_count}>
          <div className={styles.desc_body}>
            <span>{name}</span>
            <p>{description}</p>
            <h5>{price} руб.</h5>
            <div className={styles.nav_product}>
              <h5 className={styles.remove_product}>Избранные</h5>
              <h5 className={styles.remove_product} onClick={onClickRemove}>
                Удалить
              </h5>
            </div>
          </div>
          <div className={styles.count_body}>
            <span>{count}</span>
            <div className={styles.icon_body}>
              <AiOutlineUp onClick={onClickPlus} className={styles.icon_plus} />
              <AiOutlineDown
                onClick={onClickMinus}
                className={styles.icon_minus}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
