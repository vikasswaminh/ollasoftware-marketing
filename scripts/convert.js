import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');

const exclusions = [
  'favicon',
  'apple-touch-icon',
  'android-chrome',
  'web-app-manifest',
  'og-image',
  'nh-card-logo', // Exclude small static logos just in case
];

function shouldExclude(filename) {
  return exclusions.some(exclude => filename.includes(exclude));
}

async function convertDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await convertDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if ((ext === '.png' || ext === '.jpg' || ext === '.jpeg') && !shouldExclude(file)) {
        const basename = path.basename(file, ext);
        const webpPath = path.join(directory, `${basename}.webp`);
        
        console.log(`Converting: ${fullPath} -> ${webpPath}`);
        
        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(webpPath);
            
          console.log(`Successfully created ${webpPath}`);
          
          // Delete original file
          fs.unlinkSync(fullPath);
          console.log(`Deleted original: ${fullPath}`);
        } catch (err) {
          console.error(`Error processing ${fullPath}:`, err);
        }
      }
    }
  }
}

convertDirectory(PUBLIC_DIR).then(() => {
  console.log('Conversion complete.');
});
