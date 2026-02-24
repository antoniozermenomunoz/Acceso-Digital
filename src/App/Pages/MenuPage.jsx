import { MenuProvider } from "../Modules/Menu/Context/MenuContext";
import { Menu } from "../Modules/Menu/Components/Menu";

function MenuPage() {
  return (
    <>
      <MenuProvider>
        <Menu />
      </MenuProvider>
    </>
  );
}

export { MenuPage };
