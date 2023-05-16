import { CartListProduct } from "../../../../components/CartListProduct/CartListProduct";
import { useAppSelector } from "../../../../store/store";
import cn from "classnames";

import s from "./CartList.module.css";

interface Props {
  className?: string;
}

export const CartList: React.FC<Props> = ({ className }) => {
  const productsStore = useAppSelector((state) =>
    state.productsStore.products.filter(({ amount }) => amount)
  );

  return (
    <div className={cn(s.root, className)}>
      <ul>
        {productsStore.map(({ productData, amount }) => (
          <li key={productData.id} className={s.item}>
            <CartListProduct amount={amount} productData={productData} />
          </li>
        ))}
      </ul>
    </div>
  );
};
