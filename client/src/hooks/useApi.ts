import { useState, useCallback } from "react";

export function useApi<T, Args extends any[]>(apiFunc: (...args: Args) => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(
    async (...args: Args) => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await apiFunc(...args);
        setData(result);
        return { success: true, data: result };
      } catch (err: any) {
        const msg = err.message || "Something went wrong";
        setError(msg);
        return { success: false, error: msg };
      } finally {
        setIsLoading(false);
      }
    },
    [apiFunc]
  );

  return {
    data,
    isLoading,
    error,
    execute,
    setData,
  };
}
