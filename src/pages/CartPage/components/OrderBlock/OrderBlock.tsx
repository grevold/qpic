import { useAppSelector } from "../../../../store/store";
import cn from "classnames";

import s from "./OrderBlock.module.css";

interface Props {
  className?: string;
}

export const OrderBlock: React.FC<Props> = ({ className }) => {
  const sum = useAppSelector((state) =>
    state.productsStore.products.reduce(
      (accumulator, { productData, amount }) =>
        accumulator + productData.price * amount,
      0
    )
  );

  return (
    <div className={cn(s.root, className)}>
      <div className={s.final_price}>
        <span className={s.title}>ИТОГО</span>
        <span className={s.title}>₽ {sum}</span>
      </div>
      <button disabled={sum === 0} className={s.button}>
        Перейти к оформлению
      </button>
    </div>
  );
};
