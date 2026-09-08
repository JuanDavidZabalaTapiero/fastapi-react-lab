const API_URL = import.meta.env.VITE_API_URL;

export async function request(path: string, options?: RequestInit) {
  let response;

  // captura: errores de red
  try {
    response = await fetch(`${API_URL}${path}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
  } catch (error) {
    throw new Error("No se pudo conectar al servidor.");
  }

  const data = await response.json().catch(() => null);

  // captura: errores HTTP
  if (!response.ok) {
    throw new Error(data?.detail || "Ocurrió un error inesperado.");
  }

  return data;
}

export async function createUser(name: string) {
  return request("/users/", { method: "POST", body: JSON.stringify({ name }) });
}

export async function getUsers() {
  return request("/users/");
}

export async function getUser(id: number) {
  return request(`/users/${id}`);
}

export async function updateUser(id: number, name: string) {
  return request(`/users/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name }),
  });
}

export async function deleteUser(id: number) {
  return request(`/users/${id}`, { method: "DELETE" });
}
