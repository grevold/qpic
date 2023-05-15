import { LinkToCart } from "../LinkToCart/LinkToCart";
import { LinkToFavorites } from "../LinkToFavorites/LinkToFavorites";
import { Logo } from "../Logo/Logo";

import s from "./NavHeader.module.css";

export const NavHeader = () => {
  return (
    <header className={s.root}>
      <ul className={s.nav}>
        <li>
          <Logo />
        </li>
        <li className={s.links}>
          <LinkToFavorites amount={2} />
          <LinkToCart amount={2} className={s.linkToCart} />
        </li>
      </ul>
    </header>
  );
};
