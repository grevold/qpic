import { HashRouter, Route, Routes } from "react-router-dom";
import { RoutePath } from "./types";
import { CartPage } from "./pages/CartPage/CartPage";
import { MainPage } from "./pages/MainPage/MainPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<CartPage />} path={RoutePath.CartPage} />
        <Route element={<MainPage />} path={RoutePath.MainPage} />
      </Routes>
    </HashRouter>
  );
}

export default App;
