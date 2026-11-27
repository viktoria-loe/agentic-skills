// Checks every skill under skills/: each folder has a SKILL.md whose frontmatter
// names the folder and describes when to use it, with a body after it.
// Exits 1 and lists every problem, so one run shows them all.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'skills');
const problems = [];
const folders = fs.readdirSync(root, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
if (folders.length === 0) problems.push('skills/ has no skills');

for (const folder of folders) {
  const file = path.join(root, folder, 'SKILL.md');
  const where = `skills/${folder}/SKILL.md`;
  if (!fs.existsSync(file)) { problems.push(`${where}: missing`); continue; }
  const text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const m = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) { problems.push(`${where}: no frontmatter between --- lines at the top`); continue; }
  const fields = Object.fromEntries(m[1].split('\n')
    .map(line => line.match(/^([a-z_-]+):\s*(.*)$/))
    .filter(Boolean)
    .map(([, key, value]) => [key, value.trim()]));
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(folder)) problems.push(`${where}: the folder name must be lowercase words joined by hyphens`);
  if (fields.name !== folder) problems.push(`${where}: name is "${fields.name ?? ''}", it must be "${folder}"`);
  if (!fields.description) problems.push(`${where}: description is missing`);
  else if (fields.description.length > 1024) problems.push(`${where}: description is ${fields.description.length} characters, over 1024`);
  if (!m[2].trim()) problems.push(`${where}: no instructions after the frontmatter`);
}

if (problems.length) {
  console.log(`${problems.length} problem(s):\n${problems.map(p => `- ${p}`).join('\n')}`);
  process.exit(1);
}
console.log(`${folders.length} skill(s) checked: ${folders.join(', ')}`);
