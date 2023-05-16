export enum ProductCategory {
  Headphones = "Headphones",
  WirelessHeadphones = "WirelessHeadphones",
}

export enum RoutePath {
  MainPage = "*",
  CartPage = "/cart",
  FavoritesPage = "/favorites",
  ContactsPage = "/contacts",
  ConditionsPage = "/conditions",
  Vk = "/vk",
  Telegram = "/telegram",
  WhatsApp = "/whatsapp",
}

export interface Product {
  id: number;
  img: string;
  price: number;
  title: string;
  rate: number;
  prevPrice?: number;
  category: ProductCategory;
}

export interface ProductsStore {
  products: {
    amount: number;
    productData: Product;
  }[];
}
