import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { RoutePath } from "../../types";
import { LanguageIcon } from "../../icons/LanguageIcon";
import { VkIcon } from "../../icons/VkIcon";
import { WhatsAppIcon } from "../../icons/WhatsAppIcon";
import { TelegramIcon } from "../../icons/TelegramIcon";
import cn from "classnames";

import s from "./Footer.module.css";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn(s.root, className)}>
      <Logo />
      <ul className={s.nav}>
        <li>
          <Link to={RoutePath.FavoritesPage} className={s.link}>
            Избранное
          </Link>
        </li>
        <li>
          <Link to={RoutePath.CartPage} className={s.link}>
            Корзина
          </Link>
        </li>
        <li>
          <Link to={RoutePath.ContactsPage} className={s.link}>
            Контакты
          </Link>
        </li>
      </ul>
      <div className={s.conditions_container}>
        <Link className={s.conditions} to={RoutePath.ConditionsPage}>
          Условия сервиса
        </Link>
        <div className={s.language_container}>
          <LanguageIcon />
          <button className={s.language_choice_active}>Рус</button>
          <button className={s.language_choice}>Eng</button>
        </div>
      </div>
      <ul className={s.socials}>
        <li>
          <Link to={RoutePath.Vk} className={s.link}>
            <VkIcon />
          </Link>
        </li>
        <li>
          <Link to={RoutePath.Telegram} className={s.link}>
            <TelegramIcon />
          </Link>
        </li>
        <li>
          <Link to={RoutePath.WhatsApp} className={s.link}>
            <WhatsAppIcon />
          </Link>
        </li>
      </ul>
    </footer>
  );
};
