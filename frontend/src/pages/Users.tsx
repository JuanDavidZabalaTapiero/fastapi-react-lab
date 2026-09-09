import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { getUsers, deleteUser } from "../api";

function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.users);
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

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      // Remueve el usuario del estado para refrescar la lista en pantalla
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      toast.success("Usuario eliminado correctamente");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("No se pudo eliminar el usuario");
      }
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between border-b border-neutral-800 pb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-100">
            Usuarios
          </h1>
          <p className="text-sm text-neutral-400 mt-1">
            Administra los usuarios registrados en el sistema.
          </p>
        </div>

        <Link
          to="/users/register"
          className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-neutral-950 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
        >
          Registrar nuevo
        </Link>
      </header>

      {loading ? (
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center text-sm text-neutral-500">
          Cargando usuarios...
        </div>
      ) : users.length === 0 ? (
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center text-sm text-neutral-500">
          Aún no hay usuarios para mostrar.
        </div>
      ) : (
        <ul className="rounded-xl border border-neutral-800 bg-neutral-900 divide-y divide-neutral-800 overflow-hidden">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between gap-4 px-4 py-3"
            >
              <p className="text-sm font-medium text-neutral-100">
                {user.name}
              </p>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => navigate(`/users/${user.id}/edit`)}
                  className="h-9 px-3 text-sm font-medium text-neutral-200 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
                >
                  Editar
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(user.id)}
                  className="h-9 rounded-lg bg-rose-950/60 px-3 text-sm font-medium text-rose-300 transition-colors hover:bg-rose-950 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Users;
