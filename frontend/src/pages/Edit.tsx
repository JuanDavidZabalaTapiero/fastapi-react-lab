import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { getUser, updateUser } from "../api";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const userId = Number(id);

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      if (!Number.isInteger(userId) || userId <= 0) {
        toast.error("Usuario no encontrado.");
        setLoading(false);
        return;
      }

      try {
        const response = await getUser(userId);
        setName(response.user.name);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("Ocurrió un error inesperado");
        }
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [userId]);

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const normalizedName = name.trim().toUpperCase();

    if (!normalizedName) {
      setError("El nombre es obligatorio.");
      return;
    }

    if (normalizedName.length < 2) {
      setError("El nombre debe tener al menos 2 caracteres.");
      return;
    }

    if (normalizedName.length > 100) {
      setError("El nombre no puede superar los 100 caracteres.");
      return;
    }

    try {
      const response = await updateUser(userId, normalizedName);
      toast.success(response.message);
      navigate("/users");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Ocurrió un error inesperado");
      }
    }
  };

  return (
    <section className="max-w-md mx-auto space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-100">
          Editar usuario
        </h1>
        <p className="text-sm text-neutral-400">
          Actualiza los datos del usuario seleccionado.
        </p>
      </header>

      <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900 shadow-sm">
        {loading ? (
          <p className="text-sm text-neutral-500 text-center">
            Cargando usuario...
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs font-medium uppercase tracking-wider text-neutral-400"
              >
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                value={name}
                placeholder="Ej. JUAN PÉREZ"
                onChange={(event) => setName(event.target.value)}
                className="w-full h-10 px-3 text-sm bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all"
              />
              {error && (
                <p className="text-xs text-rose-400 font-medium pt-1">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-10 text-sm font-medium text-neutral-950 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-900 active:scale-[0.99] transform"
            >
              Guardar cambios
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Edit;
