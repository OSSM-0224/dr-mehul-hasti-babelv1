import { ContactMessage } from "@/src/types/index.js";

export const contactApi = {
  getMessages: async (): Promise<ContactMessage[]> => {
    const base = import.meta.env.VITE_API_URL || "https://dr-mehul-hasti-babelv1-backend.onrender.com";
    const response = await fetch(`${base}/api/contact`);
    if (!response.ok) {
      throw new Error("Failed to fetch contact messages");
    }
    return response.json();
  },

  submitMessage: async (message: ContactMessage): Promise<{ success: boolean; message: ContactMessage }> => {
    const base = import.meta.env.VITE_API_URL || "https://dr-mehul-hasti-babelv1-backend.onrender.com";
    const response = await fetch(`${base}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "Failed to submit contact message");
    }
    return response.json();
  },
};
