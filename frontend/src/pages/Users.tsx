import { Link } from "react-router-dom";

function Users() {
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

      {/* Contenedor preparado para la lista de usuarios */}
      <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center text-sm text-neutral-500">
        Aún no hay usuarios para mostrar.
      </div>
    </section>
  );
}

export default Users;
