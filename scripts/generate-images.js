const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputFile = path.join(__dirname, '..', 'public', 'neetu-img.jpg');
const outputDir = path.join(__dirname, '..', 'public', 'generated');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function generateImages() {
    try {
        console.log('🚀 Starting image generation with Sharp...');

        // 1. Favicon (Standard)
        await sharp(inputFile)
            .resize(32, 32)
            .toFile(path.join(outputDir, 'favicon-32x32.png'));

        // 2. Apple Touch Icon
        await sharp(inputFile)
            .resize(180, 180)
            .toFile(path.join(outputDir, 'apple-touch-icon.png'));

        // 3. Android/PWA Icons
        await sharp(inputFile)
            .resize(192, 192)
            .toFile(path.join(outputDir, 'icon-192x192.png'));
        await sharp(inputFile)
            .resize(512, 512)
            .toFile(path.join(outputDir, 'icon-512x512.png'));

        // 4. OpenGraph SEO Image (1200x630)
        await sharp(inputFile)
            .resize(1200, 630, {
                fit: 'cover',
                position: 'center'
            })
            .toFormat('jpeg')
            .toFile(path.join(outputDir, 'og-image.jpg'));

        // 5. Responsive Hero versions
        await sharp(inputFile)
            .resize(400)
            .toFile(path.join(outputDir, 'hero-sm.webp'));
        await sharp(inputFile)
            .resize(800)
            .toFile(path.join(outputDir, 'hero-lg.webp'));

        console.log('✅ All images generated successfully in /public/generated!');
    } catch (error) {
        console.error('❌ Error generating images:', error);
    }
}

generateImages();
