import fs from "fs";
import path from "path";

const dataDirectory = path.resolve(process.cwd(), "src/app/data");

// Function to write data to a JSON file
export async function writeToFile(fileName: string, data: any): Promise<void> {
  const filePath = path.join(dataDirectory, fileName);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// Function to read data from a JSON file
export async function readFromFile(fileName: string): Promise<Object | null> {
  const filePath = path.join(dataDirectory, fileName);

  if (!fs.existsSync(filePath)) {
    console.error(`File ${filePath} does not exist.`);
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent) as Object;
}
