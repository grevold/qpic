import { HashRouter, Route, Routes } from "react-router-dom";
import { RoutePath } from "./types";
import { CartPage } from "./pages/CartPage/CartPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
import { Layout } from "./components/Layout/Layout";
import { persistor, store } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Layout>
            <Routes>
              <Route element={<CartPage />} path={RoutePath.CartPage} />
              <Route element={<MainPage />} path={RoutePath.MainPage} />
              <Route
                element={<FavoritesPage />}
                path={RoutePath.FavoritesPage}
              />
            </Routes>
          </Layout>
        </PersistGate>
      </Provider>
    </HashRouter>
  );
}

export default App;
