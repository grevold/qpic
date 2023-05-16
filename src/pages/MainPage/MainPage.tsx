import { ProductsList } from "../../components/ProductsList/ProductsList";
import { products } from "../../constants";
import { ProductCategory } from "../../types";

import s from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={s.root}>
      <ProductsList
        title="Наушники"
        products={products.filter(
          ({ category }) => category === ProductCategory.Headphones
        )}
      />
      <ProductsList
        title="Беспроводные наушники"
        products={products.filter(
          ({ category }) => category === ProductCategory.WirelessHeadphones
        )}
      />
    </div>
  );
};
