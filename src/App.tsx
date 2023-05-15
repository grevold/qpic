import { HashRouter, Route, Routes } from "react-router-dom";
import { RoutePath } from "./types";
import { CartPage } from "./pages/CartPage/CartPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route element={<CartPage />} path={RoutePath.CartPage} />
          <Route element={<MainPage />} path={RoutePath.MainPage} />
          <Route element={<FavoritesPage />} path={RoutePath.FavoritesPage} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
