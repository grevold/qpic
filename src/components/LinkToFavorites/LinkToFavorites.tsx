import { Link } from "react-router-dom";
import { RoutePath } from "../../types";
import { Amount } from "../Amount/Amount";
import { FavoritesIcon } from "../../icons/FavoritesIcon";
import cn from "classnames";

import s from "./LinkToFavorites.module.css";

interface Props {
  className?: string;
  amount: number;
}

export function LinkToFavorites({ className, amount }: Props) {
  return (
    <Link className={cn(s.root, className)} to={RoutePath.FavoritesPage}>
      <FavoritesIcon className={s.cartIcon} />
      <Amount amount={amount} className={s.amount} />
    </Link>
  );
}
