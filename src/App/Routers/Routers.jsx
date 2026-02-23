import { AutenticaciónProvider } from "../Modules/Autenticación/Context/AutenticaciónContext/";
import { HashRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { IngresarPage } from "../Pages/IngresarPage";
import { RegistrarPage } from "../Pages/RegistrarPage";
import { AppLayout } from "../layouts/AppLayout";
import { HomePage } from "../Pages/HomePage";

function Routers() {
  return (
    <>
      <HashRouter>
        <AutenticaciónProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/Ingresar" element={<IngresarPage />} />
              <Route path="/Registrar" element={<RegistrarPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </AutenticaciónProvider>
      </HashRouter>
    </>
  );
}

export { Routers };
