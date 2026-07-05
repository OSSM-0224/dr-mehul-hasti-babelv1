import fs from "fs/promises";
import { databaseConfig } from "../config/index.js";

export async function ensureFileExists(filePath: string, initialContent: string = "[]") {
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, initialContent, "utf-8");
  }
}

export async function initDatabase() {
  await ensureFileExists(databaseConfig.appointmentsFile, "[]");
  await ensureFileExists(databaseConfig.messagesFile, "[]");
}

export async function readJsonFile<T>(filePath: string): Promise<T[]> {
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw) as T[];
  } catch {
    return [];
  }
}

export async function writeJsonFile<T>(filePath: string, data: T[]): Promise<void> {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}
