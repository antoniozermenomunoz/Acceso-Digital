import { AutenticaciónContext } from "../Context/AutenticaciónContext";
import { useState, useContext } from "react";

function UseIngresarForm() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { Verificar } = useContext(AutenticaciónContext);

  const Ingresar = async (e) => {
    e.preventDefault();
    setError("");
    if (!ValidarCampos()) {
      return;
    }
    setLoading(true);
    await delay(1000);
    try {
      await Verificar(email, password);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const ValidarCampos = () => {
    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return false;
    }

    if (!email.includes("@")) {
      setError("Email inválido");
      return false;
    }

    return true;
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    Ingresar,
  };
}

export { UseIngresarForm };
