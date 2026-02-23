import { AutenticaciónServices } from "../Services/AutenticaciónServices";
import { createContext, useState } from "react";

const AutenticaciónContext = createContext();

function AutenticaciónProvider({ children }) {
  const [state, setState] = useState({
    user: null,
    isLoggedIn: false,
    loading: true,
  });

  const Verificar = async (email, password) => {
    const data = await AutenticaciónServices.Verificar(email, password);
    setState({
      user: data.user,
      isLoggedIn: true,
      loading: false,
    });
    return data;
  };

  const Guardar = async (name, email, password) => {
    const data = await AutenticaciónServices.Registrar(name, email, password);
    setState({
      user: data.user,
      isLoggedIn: true,
      loading: false,
    });
    return data;
  };

  const Salir = () => {
    AutenticaciónServices.Salir();
    setState({
      user: null,
      isLoggedIn: false,
      loading: false,
    });
  };

  return (
    <AutenticaciónContext.Provider
      value={{
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        loading: state.loading,
        Verificar,
        Guardar,
        Salir,
      }}
    >
      {children}
    </AutenticaciónContext.Provider>
  );
}

export { AutenticaciónContext, AutenticaciónProvider };
