import { CartListProduct } from "../../../../components/CartListProduct/CartListProduct";
import { headphones } from "../../../../constants";
import cn from "classnames";

import s from "./CartList.module.css";

interface Props {
  className?: string;
}

export const CartList: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(s.root, className)}>
      <ul>
        {headphones.map((productData) => (
          <li key={productData.id} className={s.item}>
            <CartListProduct {...productData} />
          </li>
        ))}
      </ul>
    </div>
  );
};
