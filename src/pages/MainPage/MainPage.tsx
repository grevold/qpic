import { LinkToCart } from "../../components/LinkToCart/LinkToCart";

export const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <LinkToCart amount={2} />
    </div>
  );
};
