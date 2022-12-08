import React from "react";
import styles from "../Content/content.module.sass";
import { useDispatch} from "react-redux";
import { addItem } from "../../features/cartSlise";
import { HandySvg } from "handy-svg";
import iconCart from '../Content/img/Vector.svg'
import iconFavorites from "../Content/img/coolicon.svg";

const Content = ({ id, price, name, description, image }) => {
  
 
  const dispatch = useDispatch();
  
  const addToCart = () => {
    const item = {
      id,
      price,
      name,
      description,
      image,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <img src={image} />
        <span>{name}</span>
        <p>{description}</p>
        <span>{price} руб.</span>
        <HandySvg
          onClick={addToCart}
          src={iconCart}
          className={styles.iconCart}
          width="32"
          height="32"
        />
        <HandySvg
          src={iconFavorites}
          className={styles.iconFavorites}
          width="32"
          height="32"
        />
      </div>
    </div>
  );
};

export default Content;
