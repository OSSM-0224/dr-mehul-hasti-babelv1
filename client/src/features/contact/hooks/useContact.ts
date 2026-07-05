import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks.js";
import { submitContactMessage, resetContactSuccess } from "../slice/contact.slice.js";
import { ContactMessage } from "@/src/types/index.js";

export function useContact() {
  const dispatch = useAppDispatch();
  const { loading, error, submitSuccess } = useAppSelector((state) => state.contact);

  const sendMessage = useCallback(
    async (message: ContactMessage) => {
      return dispatch(submitContactMessage(message)).unwrap();
    },
    [dispatch]
  );

  const clearContactSuccess = useCallback(() => {
    dispatch(resetContactSuccess());
  }, [dispatch]);

  return {
    loading,
    error,
    submitSuccess,
    sendMessage,
    clearContactSuccess,
  };
}
