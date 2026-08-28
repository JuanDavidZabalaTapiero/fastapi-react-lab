const API_URL = import.meta.env.VITE_API_URL;

export async function getMessage(): Promise<string> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Ocurrió un error al intentar conectarse con la API.");
  }

  const data: { message: string } = await response.json();

  return data.message;
}
