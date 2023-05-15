import { ProductCard } from "../ProductCard/ProductCard";
import { Product } from "../../types";
import cn from "classnames";

import s from "./ProductsList.module.css";

interface Props {
  title: string;
  products: Product[];
  className?: string;
}

export function ProductsList({ title, products, className }: Props) {
  return (
    <div className={cn(s.root, className)}>
      <h1 className={s.title}>{title}</h1>
      <ul className={s.list}>
        {products.map((productData) => (
          <li key={productData.id} className={s.item}>
            <ProductCard {...productData} />
          </li>
        ))}
      </ul>
    </div>
  );
}
