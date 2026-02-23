import { UseRegistrarForm } from "../../Hooks/UseRegistrarForm";
import { useNavigate } from "react-router-dom";

function RegistrarForm() {
  const navigate = useNavigate();
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    loading,
    Registrar,
    LimpiarError,
  } = UseRegistrarForm();

  const onSubmit = async (e) => {
    const success = await Registrar(e);
    if (success) {
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Crear Cuenta</h2>
        {error && <div>{error}</div>}
        <div>
          <label>Nombre Completo</label>
          <input
            autoFocus
            required
            id="name"
            type="name"
            disabled={loading}
            placeholder="Ej. Juan Pérez"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              LimpiarError();
            }}
          />
        </div>
        <div>
          <label>Correo</label>
          <input
            required
            id="email"
            type="email"
            disabled={loading}
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              LimpiarError();
            }}
          />
        </div>
        <div>
          <div>
            <label>Contraseña</label>
            <input
              required
              id="password"
              type="password"
              disabled={loading}
              placeholder="******"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                LimpiarError();
              }}
            />
          </div>
          <div>
            <label>Confirmar Contraseña</label>
            <input
              required
              id="confirmPassword"
              type="password"
              disabled={loading}
              placeholder="******"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                LimpiarError();
              }}
            />
          </div>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? " Creando cuenta..." : "Crear Cuenta"}
        </button>
      </form>
    </div>
  );
}

export { RegistrarForm };
