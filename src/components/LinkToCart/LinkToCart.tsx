import { Link } from "react-router-dom";
import { RoutePath } from "../../types";
import { CartIcon } from "../../icons/CartIcon";
import { Amount } from "../Amount/Amount";
import cn from "classnames";

import s from "./LinkToCart.module.css";

interface Props {
  className?: string;
  amount: number;
}

export function LinkToCart({ className, amount }: Props) {
  return (
    <Link className={cn(s.root, className)} to={RoutePath.CartPage}>
      <CartIcon className={s.cartIcon} />
      <Amount amount={amount} className={s.amount} />
    </Link>
  );
}
