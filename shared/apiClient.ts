// public/shared/apiClient.ts

export class APIClient {
  constructor(private base: string) {}

  async get<T>(url: string): Promise<T> {
    try {
      const res = await fetch(this.base + url);
      if (!res.ok) throw new Error(`GET ${url} failed (${res.status})`);
      return await res.json();
    } catch (err) {
      console.error("API GET Error:", err);
      throw err;
    }
  }

  async post<T>(url: string, body: any): Promise<T> {
    try {
      const res = await fetch(this.base + url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`POST ${url} failed (${res.status})`);
      return await res.json();
    } catch (err) {
      console.error("API POST Error:", err);
      throw err;
    }
  }

  async put<T>(url: string, body: any): Promise<T> {
    try {
      const res = await fetch(this.base + url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`PUT ${url} failed (${res.status})`);
      return await res.json();
    } catch (err) {
      console.error("API PUT Error:", err);
      throw err;
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const res = await fetch(this.base + url, { method: "DELETE" });
      if (!res.ok) throw new Error(`DELETE ${url} failed (${res.status})`);
      return await res.json();
    } catch (err) {
      console.error("API DELETE Error:", err);
      throw err;
    }
  }
}
