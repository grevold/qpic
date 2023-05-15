import cn from "classnames";

import s from "./OrderBlock.module.css";

interface Props {
  className?: string;
}

export const OrderBlock: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(s.root, className)}>
      <div className={s.final_price}>
        <span className={s.title}>ИТОГО</span>
        <span className={s.title}>₽ 2 927</span>
      </div>
      <button className={s.button}>Перейти к оформлению</button>
    </div>
  );
};
