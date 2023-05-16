import { Link } from "react-router-dom";
import { RoutePath } from "../../types";
import { CartIcon } from "../../icons/CartIcon";
import { Amount } from "../Amount/Amount";
import cn from "classnames";
import { useAppSelector } from "../../store/store";

import s from "./LinkToCart.module.css";

interface Props {
  className?: string;
}

export function LinkToCart({ className }: Props) {
  const amount = useAppSelector((state) =>
    state.productsStore.products.reduce(
      (accumulator, { amount }) => accumulator + amount,
      0
    )
  );

  return (
    <Link className={cn(s.root, className)} to={RoutePath.CartPage}>
      <CartIcon className={s.cartIcon} />
      <Amount amount={amount} className={s.amount} />
    </Link>
  );
}
