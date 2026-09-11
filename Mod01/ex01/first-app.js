const fs = require('fs');
const fileContent = fs.readFileSync('archive.txt')
const lastNum = fileContent.toString();
console.log(lastNum.at(-1));
fs.writeFileSync('archive.txt', fileContent ? fileContent + `\n${Number(lastNum.at(-1)) + 1}` : `0`)