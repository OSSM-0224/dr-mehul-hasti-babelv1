import fs from "fs/promises";
import path from "path";

export class JsonDb {
  constructor(filePath) {
    this.filePath = filePath || path.join(process.cwd(), "metadata.json");
  }

  async ensureFileExists(initialContent = "[]") {
    try {
      await fs.access(this.filePath);
    } catch {
      await fs.writeFile(this.filePath, initialContent, "utf-8");
    }
  }

  async readAll() {
    await this.ensureFileExists();
    const content = await fs.readFile(this.filePath, "utf-8");
    return JSON.parse(content);
  }

  async writeAll(data) {
    await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), "utf-8");
    return data;
  }

  async insert(item) {
    const list = await this.readAll();
    list.push(item);
    await this.writeAll(list);
    return item;
  }

  async remove(predicate) {
    const list = await this.readAll();
    const filtered = list.filter((item) => !predicate(item));
    await this.writeAll(filtered);
    return filtered;
  }
}
