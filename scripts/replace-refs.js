import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '../src');

const exclusions = [
  'favicon',
  'apple-touch-icon',
  'android-chrome',
  'web-app-manifest',
  'og-image',
  'nh-card-logo',
];

function shouldExclude(text) {
  return exclusions.some(exclude => text.includes(exclude));
}

// Regex to find .png, .jpg, .jpeg extensions
const regex = /([a-zA-Z0-9_/-]+)\.(png|jpg|jpeg)/gi;

async function replaceInDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await replaceInDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.astro' || ext === '.css' || ext === '.ts' || ext === '.js') {
        let content = fs.readFileSync(fullPath, 'utf8');
        let hasChanges = false;

        const newContent = content.replace(regex, (match, p1, p2) => {
          if (shouldExclude(match)) {
            return match; // Do not replace
          }
          hasChanges = true;
          return `${p1}.webp`;
        });

        if (hasChanges) {
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log(`Updated references in: ${fullPath}`);
        }
      }
    }
  }
}

replaceInDirectory(SRC_DIR).then(() => {
  console.log('Reference replacement complete.');
});
