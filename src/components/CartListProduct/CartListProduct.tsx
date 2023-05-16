import { MinusIcon } from "../../icons/MinusIcon";
import { PlusIcon } from "../../icons/PlusIcon";
import { TrashIcon } from "../../icons/TrashIcon";
import { productsStoreActions } from "../../store/productsReducer";
import { useAppDispatch } from "../../store/store";
import { Product } from "../../types";

import s from "./CartListProduct.module.css";

interface Props {
  productData: Product;
  amount: number;
}

export const CartListProduct: React.FC<Props> = ({ productData, amount }) => {
  const { img, price, title, id } = productData;
  const dispatch = useAppDispatch();
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
        <button
          className={s.trash}
          onClick={() => dispatch(productsStoreActions.trash(id))}
        >
          <TrashIcon />
        </button>
      </div>
      <div className={s.body}>
        <div className={s.counter}>
          <button onClick={() => dispatch(productsStoreActions.remove(id))}>
            <MinusIcon />
          </button>
          <span>{amount}</span>
          <button
            onClick={() => dispatch(productsStoreActions.add(productData))}
          >
            <PlusIcon />
          </button>
        </div>
        <div className={s.priceBottom}>{priceRub}</div>
      </div>
    </div>
  );
};
