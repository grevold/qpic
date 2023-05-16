import { RateIcon } from "../../icons/RateIcon";
import { productsStoreActions } from "../../store/productsReducer";
import { useAppDispatch } from "../../store/store";
import { Product } from "../../types";

import s from "./ProductCard.module.css";

export const ProductCard: React.FC<Product> = (productData) => {
  const dispatch = useAppDispatch();

  return (
    <div className={s.root}>
      <div className={s.head}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${productData.img}`}
          className={s.image}
          alt={productData.title}
        />
      </div>
      <div className={s.body}>
        <div className={s.row}>
          <h1 className={s.title}>{productData.title}</h1>
          <h1 className={s.price}>{productData.price} ₽</h1>
        </div>
        <div className={s.row}>
          <div className={s.rating}>
            <RateIcon />
            {productData.rate}
          </div>
          <button
            onClick={() => dispatch(productsStoreActions.add(productData))}
            className={s.button}
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};
