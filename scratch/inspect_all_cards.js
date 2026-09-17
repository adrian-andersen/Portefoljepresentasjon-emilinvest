const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

for (let i = 1; i <= 16; i++) {
  const nextDelimiter = i < 16 ? `<section id="slide-${i+1}"` : `</main>`;
  const startIdx = content.indexOf(`<section id="slide-${i}"`);
  const endIdx = content.indexOf(nextDelimiter, startIdx);
  const slideHtml = content.substring(startIdx, endIdx);

  const cardMatches = slideHtml.match(/<div class="[^"]*rich-card[^"]*"/g) || [];
  console.log(`Slide ${i}: ${cardMatches.length} cards`);
  cardMatches.forEach((c, idx) => {
    console.log(`  Card ${idx + 1}: ${c}`);
  });
}
