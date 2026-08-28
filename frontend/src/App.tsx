import { useState } from "react";
import { getMessage } from "./api";

function App() {
  // Declarar y Establecer variable
  const [message, setMessage] = useState("");

  // Llamada a API
  async function handleClick() {
    try {
      const message = await getMessage();
      setMessage(message);
    } catch (error) {
      console.error(error);
    }
  }

  // html
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Hola
        </h1>

        <button
          onClick={handleClick}
          className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-slate-700 active:scale-[0.98]"
        >
          Hablar con API
        </button>

        <div className="mt-6 min-h-12 rounded-xl bg-slate-50 p-4 text-slate-700">
          {message}
        </div>
      </div>
    </main>
  );
}

export default App;
