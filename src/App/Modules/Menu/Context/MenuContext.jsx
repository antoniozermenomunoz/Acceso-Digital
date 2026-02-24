import { MenuServices } from "../Services/MenuServices";
import { createContext, useState } from "react";

const MenuContext = createContext();

function MenuProvider({ children }) {
  const [state, setState] = useState({
    options: null,
    loading: true,
  });

  const Consultar = async () => {
    const data = await MenuServices.Consultar();
    setState({
      options: data,
      loading: false,
    });
  };

  return (
    <MenuContext.Provider
      value={{
        options: state.options,
        loading: state.loading,
        Consultar,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuProvider };
