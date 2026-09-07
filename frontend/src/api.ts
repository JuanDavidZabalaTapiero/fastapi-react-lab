const API_URL = import.meta.env.VITE_API_URL;

export async function createUser(name: string) {
  let response;

  try {
    response = await fetch(`${API_URL}/users/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
  } catch {
    throw new Error("No se pudo conectar al servidor.");
  }

  // Intentar acceder al JSON o devolver null en caso de error inesperado
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.detail || "Ocurrió un error inesperado.");
  }

  return data;
}
