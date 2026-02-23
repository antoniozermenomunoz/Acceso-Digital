const APIURL = import.meta.env.VITE_API_BASE_URL;
const APIKEY = import.meta.env.VITE_API_KEY;

export const AutenticaciónServices = {
  Verificar: async (email, password) => {
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

      const usuario = {
        name: user.name,
        mail: user.mail,
        role: user.role,
      };

      localStorage.setItem("user", JSON.stringify(usuario));

      return { user: usuario };
    } catch (error) {
      console.error("❌ Error en login:", error.message);
      throw error;
    }
  },
  Registrar: async (name, email, password) => {
    try {
      const response = await fetch(`${APIURL}/Users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: APIKEY,
          Authorization: `Bearer ${APIKEY}`,
        },
        body: JSON.stringify({
          name: name,
          mail: email,
          password: password,
          role: "Usuario",
        }),
      });

      if (response.status === 201 || response.status === 200) {
        const newUser = {
          name: name,
          mail: email,
          role: "Usuario",
        };

        localStorage.setItem("user", JSON.stringify(newUser));

        return { user: newUser };
      }

      throw new Error("Error al registrarse");
    } catch (error) {
      console.error("❌ Error al registrarse:", error.message);
      throw error;
    }
  },
  LocalStorage: () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  Salir: () => {
    localStorage.removeItem("user");
  },
};
