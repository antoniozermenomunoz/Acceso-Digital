import { UseIngresarForm } from "../../Hooks/UseIngresarForm";
import { useNavigate } from "react-router-dom";
import "./IngresarForm.css";

function IngresarForm() {
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword, error, loading, Ingresar } =
    UseIngresarForm();

  const onSubmit = async (e) => {
    const success = await Ingresar(e);
    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card shadow-sm border-0 form-akron-container">
            <div className="card-body p-4 p-md-5">
              <form onSubmit={onSubmit}>
                <h2
                  className="text-center mb-4 fw-bold"
                  style={{ color: "var(--PrimerColor)" }}
                >
                  Iniciar Sesión
                </h2>
                {error && (
                  <div
                    className="alert alert-danger p-2 text-center small"
                    role="alert"
                  >
                    {error}
                  </div>
                )}
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label fw-semibold"
                    style={{ color: "var(--TextoOscuro)" }}
                  >
                    Correo
                  </label>
                  <input
                    autoFocus
                    required
                    id="email"
                    type="email"
                    className="form-control form-control-lg input-akron"
                    disabled={loading}
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="form-label fw-semibold"
                    style={{ color: "var(--TextoOscuro)" }}
                  >
                    Contraseña
                  </label>
                  <input
                    required
                    id="password"
                    type="password"
                    className="form-control form-control-lg input-akron"
                    disabled={loading}
                    placeholder="*****"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-akron btn-lg fw-bold"
                    disabled={loading}
                  >
                    {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { IngresarForm };
