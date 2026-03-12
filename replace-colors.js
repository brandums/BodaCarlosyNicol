const fs = require('fs');

const cssPath = 'main.css';
let css = fs.readFileSync(cssPath, 'utf8');

const colorMap = {
    // Rosa champagne suave -> Rosa champagne con más color
    '#f8decd': '#5F6F4C',
    '#f0c4a8': '#5F6F4C',
};

let replaceCount = 0;

for (const [oldColor, newColor] of Object.entries(colorMap)) {
    // Create a RegExp for global, case-insensitive replacement
    const regex = new RegExp(oldColor, 'gi');
    const matches = css.match(regex);
    if (matches) {
        replaceCount += matches.length;
        css = css.replace(regex, newColor);
    }
}

fs.writeFileSync(cssPath, css);
console.log(`✅ Color replacement complete. Replaced ${replaceCount} hex color occurrences in main.css.`);
