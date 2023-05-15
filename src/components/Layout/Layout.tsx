import { Footer } from "../Footer/Footer";
import { NavHeader } from "../NavHeader/NavHeader";

import s from "./Layout.module.css";

interface Props {
  children?: JSX.Element;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className={s.root}>
      <div className={s.container}>
        <NavHeader />
        {children}
      </div>
      <Footer className={s.footer} />
    </main>
  );
};
