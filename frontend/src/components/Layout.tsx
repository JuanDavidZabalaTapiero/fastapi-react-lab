import { Link, Outlet } from "react-router-dom";
import { Toaster } from "sonner";

function Layout() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased flex flex-col">
      <Toaster position="top-center" richColors />

      <header className="border-b border-neutral-800/80 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-50">
        <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between text-sm">
          <span className="font-semibold tracking-tight text-neutral-200">
            MiApp
          </span>
          <div className="flex gap-6 font-medium">
            <Link
              to="/"
              className="text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              Inicio
            </Link>
            <Link
              to="/users"
              className="text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              Usuarios
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
