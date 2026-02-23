import { useState } from "react";

function UseIngresarForm() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const APIURL = import.meta.env.VITE_API_BASE_URL;
  const APIKEY = import.meta.env.VITE_API_KEY;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const Ingresar = async (e) => {
    e.preventDefault();
    setError("");
    if (!ValidarCampos()) {
      return;
    }
    setLoading(true);
    await delay(1000);
    try {
      await VerificarUsuario(email, password);
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

  const VerificarUsuario = async (email, password) => {
    try {
      const url = `${APIURL}/Users?mail=eq.${email}&select=*`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apikey: APIKEY,
          Authorization: `Bearer ${APIKEY}`,
        },
      });

      const text = await response.text();

      if (!text) {
        throw new Error("La API devolvió respuesta vacía");
      }

      const data = JSON.parse(text);

      if (!response.ok || data.length === 0) {
        throw new Error("Usuario no encontrado");
      }

      const user = data[0];

      if (user.password !== password) {
        throw new Error("Contraseña incorrecta");
      }

      localStorage.setItem("user", JSON.stringify(user));

      return { user };
    } catch (error) {
      console.error("❌ Error en login:", error.message);
      throw error;
    }
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
