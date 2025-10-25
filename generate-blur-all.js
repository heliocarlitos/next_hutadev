const fs = require('fs');
const path = require('path');

const imagesDir = path.join(process.cwd(), 'public/image/relative');
const outputFile = path.join(process.cwd(), 'blurData.json');

const blurData = {};

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(png|jpg|jpeg|webp)$/i.test(entry.name)) {
      const imgBuffer = fs.readFileSync(fullPath);
      const ext = path.extname(entry.name).slice(1);
      const key = `/image/relative/${entry.name}`;
      blurData[key] = `data:image/${ext};base64,${imgBuffer.toString('base64')}`;
    }
  }
}

walkDir(imagesDir);

// Salva JSON
fs.writeFileSync(outputFile, JSON.stringify(blurData, null, 2));
console.log(`Blur data URLs geradas em ${outputFile}`);
