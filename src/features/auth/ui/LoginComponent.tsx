"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "@/features/auth/actions";

export const LoginComponent = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(data: FormData) {
    const result = await loginAction(data);

    if (!result.success) {
      setError(result.message || "Login failed");
    } else {
      setError(null);
      router.push("/games/6"); // Redirect to a protected page on success
    }
  }

  return (
    <div className="flex flex-row justify-center">
      <form className="" action={handleSubmit}>
        <div className="space-x-6 pb-4">
          <label htmlFor="username">Username:</label>
          <input
            className="rounded-sm border-2 border-b-blue-400"
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div className="space-x-6 pb-4">
          <label htmlFor="password">Password:</label>
          <input
            className="rounded-sm border-2 border-b-blue-400"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <button
          className="flex w-sm flex-row justify-center rounded-2xl bg-blue-500 p-1 text-white"
          type="submit"
        >
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};
