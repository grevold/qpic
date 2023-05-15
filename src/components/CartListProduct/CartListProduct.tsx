import { MinusIcon } from "../../icons/MinusIcon";
import { PlusIcon } from "../../icons/PlusIcon";
import { TrashIcon } from "../../icons/TrashIcon";
import { Product } from "../../types";

import s from "./CartListProduct.module.css";

export const CartListProduct: React.FC<Product> = ({ img, price, title }) => {
  const priceRub = `${price} ₽`;

  return (
    <div className={s.root}>
      <div className={s.head}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${img}`}
          className={s.image}
          alt={title}
        />
        <div className={s.info}>
          <div className={s.title}>{title}</div>
          <div className={s.price}>{price} ₽</div>
        </div>
        <button className={s.trash}>
          <TrashIcon />
        </button>
      </div>
      <div className={s.body}>
        <div className={s.counter}>
          <MinusIcon />
          <span>1</span>
          <PlusIcon />
        </div>
        <div className={s.priceBottom}>{priceRub}</div>
      </div>
    </div>
  );
};
