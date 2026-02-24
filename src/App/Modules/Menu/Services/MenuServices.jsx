const APIURL = import.meta.env.VITE_API_BASE_URL;
const APIKEY = import.meta.env.VITE_API_KEY;

export const MenuServices = {
  Consultar: async () => {
    try {
      const user = MenuServices.LocalStorage();
      const url = `${APIURL}/Menu?roles=like.*${user.role}*&select=*`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apikey: APIKEY,
          Authorization: `Bearer ${APIKEY}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error al consultar datos");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("❌ Error en consulta:", error.message);
      throw error;
    }
  },
  LocalStorage: () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },
};
