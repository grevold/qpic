import { ProductsList } from "../../components/ProductsList/ProductsList";
import { headphones, wirelessHeadphones } from "../../constants";

import s from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={s.root}>
      <ProductsList title="Наушники" products={headphones} />
      <ProductsList
        title="Беспроводные наушники"
        products={wirelessHeadphones}
      />
    </div>
  );
};
