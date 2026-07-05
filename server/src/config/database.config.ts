import path from "path";

export const databaseConfig = {
  appointmentsFile: path.join(process.cwd(), "appointments.json"),
  messagesFile: path.join(process.cwd(), "messages.json"),
};
