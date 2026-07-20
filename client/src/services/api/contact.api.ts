import { ContactMessage } from "@/src/types/index.js";

const APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL as string;

export const contactApi = {
  /**
   * Submits a contact form message to a Google Apps Script Web App.
   * The Apps Script saves the entry to Google Sheets and sends a Telegram notification.
   */
  submitMessage: async (
    message: ContactMessage & { branch?: string }
  ): Promise<{ success: boolean }> => {
    if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes("YOUR_SCRIPT_ID")) {
      throw new Error(
        "Contact form is not configured. Please set VITE_GOOGLE_APPS_SCRIPT_URL in your .env file."
      );
    }

    // Google Apps Script requires form-encoded or no-cors fetch.
    // We use no-cors + URLSearchParams so the preflight is avoided.
    const params = new URLSearchParams({
      name: message.name,
      email: message.email,
      phone: message.phone ?? "",
      subject: message.subject ?? "",
      branch: (message as any).branch ?? "",
      message: message.message ?? "",
      submittedAt: new Date().toISOString(),
    });

    const response = await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
      // GAS doGet handles GET requests; avoids CORS preflight issues
    });

    if (!response.ok) {
      throw new Error("Failed to submit your inquiry. Please try again.");
    }

    return { success: true };
  },
};

