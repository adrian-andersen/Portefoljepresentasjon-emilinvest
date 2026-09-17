const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

[1, 2, 3, 6, 9, 15, 16].forEach(i => {
  const nextDelimiter = i < 16 ? `<section id="slide-${i+1}"` : `</main>`;
  const startIdx = content.indexOf(`<section id="slide-${i}"`);
  const endIdx = content.indexOf(nextDelimiter, startIdx);
  const slideHtml = content.substring(startIdx, endIdx);

  const lastDivIdx = slideHtml.lastIndexOf('<div class="w-[92vw]');
  if (lastDivIdx !== -1) {
    console.log(`=== Slide ${i} footer ===`);
    console.log(slideHtml.substring(lastDivIdx));
  }
});
