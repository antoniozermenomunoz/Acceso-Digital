import { HashRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { RegistrarPage } from "../Pages/RegistrarPage";
import { IngresarPage } from "../Pages/IngresarPage";
import { AppLayout } from "../layouts/AppLayout";
import { HomePage } from "../Pages/HomePage";

function Routers() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Ingresar" element={<IngresarPage />} />
            <Route path="/Registrar" element={<RegistrarPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export { Routers };
