

const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, '../client/src/data/departmentsData.js');
const content = fs.readFileSync(targetFile, 'utf8');
const exportIdx = content.indexOf('export const departmentDetails = {');
if (exportIdx !== -1) {
  const rest = content.slice(exportIdx);
  const newContent = "import { programs } from './programmesData.js';\n\n" + rest;
  fs.writeFileSync(targetFile, newContent, 'utf8');
  console.log('Successfully updated departmentsData.js');
} else {
  console.error('Could not find export const departmentDetails');
  process.exit(1);
}
