import { Outlet } from "react-router-dom";
import { Header } from "../Shared/Components/Header/Header";
import { Footer } from "../Shared/Components/Footer/Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      {"<Footer />"}
    </>
  );
}

export { AppLayout };
