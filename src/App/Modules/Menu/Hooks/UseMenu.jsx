import { MenuContext } from "../Context/MenuContext";
import { useState, useContext } from "react";

function UseMenu() {
  const { Consultar, options } = useContext(MenuContext);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const ConsultarOpciones = async () => {
    try {
      setLoading(true);
      await Consultar();
    } catch (error) {
      setError(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { options, error, loading, ConsultarOpciones };
}

export { UseMenu };
