import { AutenticaciónContext } from "../Context/AutenticaciónContext";
import { useState, useContext } from "react";

function UseRegistrarForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { Guardar } = useContext(AutenticaciónContext);

  const Registrar = async (e) => {
    e.preventDefault();
    setError("");

    if (!ValidarCampos()) {
      return false;
    }

    setLoading(true);

    try {
      await Guardar(name, email, password);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const ValidarCampos = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Por favor completa todos los campos");
      return false;
    }

    if (!email.includes("@")) {
      setError("Email inválido");
      return false;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return false;
    }

    return true;
  };

  const LimpiarError = () => setError("");

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    setError,
    loading,
    setLoading,
    Registrar,
    LimpiarError,
  };
}

export { UseRegistrarForm };
