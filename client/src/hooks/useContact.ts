import { useState } from "react";
import { contactApi } from "../services/api/contact.api.js";
import { ContactMessage } from "../types/index.js";
import { toast } from "sonner";

export interface ContactPayload extends ContactMessage {
  branch?: string;
}

export function useContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitContact = async (message: ContactPayload) => {
    if (isSubmitting) return false; // prevent duplicate submissions
    setIsSubmitting(true);
    setError(null);
    try {
      const result = await contactApi.submitMessage(message);
      if (result.success) {
        toast.success("Message Sent Successfully", {
          description: "Our clinic coordination team will contact you shortly.",
        });
        return true;
      }
      return false;
    } catch (err: any) {
      const msg = err.message || "Failed to submit form";
      setError(msg);
      toast.error(msg);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitContact,
    isSubmitting,
    error,
  };
}

