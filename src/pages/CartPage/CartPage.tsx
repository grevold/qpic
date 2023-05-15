import { CartList } from "./components/CartList/CartList";
import { OrderBlock } from "./components/OrderBlock/OrderBlock";

import s from "./CartPage.module.css";

export const CartPage = () => {
  return (
    <>
      <h1 className={s.title}>Корзина</h1>
      <div className={s.container}>
        <CartList className={s.cartList} />
        <OrderBlock className={s.orderBlock} />
      </div>
    </>
  );
};
