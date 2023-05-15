import { RateIcon } from "../../icons/RateIcon";
import { Product } from "../../types";

import s from "./ProductCard.module.css";

export const ProductCard: React.FC<Product> = ({ img, price, title, rate }) => {
  return (
    <div className={s.root}>
      <div className={s.head}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${img}`}
          className={s.image}
          alt={title}
        />
      </div>
      <div className={s.body}>
        <div className={s.row}>
          <h1 className={s.title}>{title}</h1>
          <h1 className={s.price}>{price} ₽</h1>
        </div>
        <div className={s.row}>
          <div className={s.rating}>
            <RateIcon />
            {rate}
          </div>
          <button className={s.button}>Купить</button>
        </div>
      </div>
    </div>
  );
};
