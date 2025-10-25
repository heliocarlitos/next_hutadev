import fs from "fs";
import path from "path";

const imgPath = path.join(process.cwd(), "public", "image", "relative", "hero-small.png");

try {
  const img = fs.readFileSync(imgPath);
  const base64 = img.toString("base64");
  console.log(`data:image/png;base64,${base64}`);
} catch (error) {
  console.error("Erro ao ler a imagem:", error);
}
