import { APP_NAME, type HealthResponse } from "@pilot/shared";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";

export function App() {
  const sample: HealthResponse = {
    status: "ok",
    service: APP_NAME,
    timestamp: new Date().toISOString()
  };

  return (
    <main>
      <h1>{APP_NAME}</h1>
      <p>React + TypeScript app is running.</p>
      <p>API base URL: {API_BASE_URL}</p>
      <pre>{JSON.stringify(sample, null, 2)}</pre>
    </main>
  );
}
