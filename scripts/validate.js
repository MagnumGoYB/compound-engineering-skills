const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SKILLS_DIR = path.join(__dirname, '..', 'skills');

function findSkillFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findSkillFiles(fullPath));
    } else if (entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function validateSkillFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(process.cwd(), filePath);
  const errors = [];

  // Check for frontmatter
  if (!content.startsWith('---')) {
    errors.push(`${relativePath}: Missing YAML frontmatter`);
    return errors;
  }

  // Extract frontmatter
  const endIndex = content.indexOf('---', 3);
  if (endIndex === -1) {
    errors.push(`${relativePath}: Unclosed frontmatter`);
    return errors;
  }

  const frontmatter = content.slice(3, endIndex).trim();
  
  try {
    const data = yaml.load(frontmatter);
    
    if (!data.name) {
      errors.push(`${relativePath}: Missing 'name' in frontmatter`);
    }
    
    if (!data.description) {
      errors.push(`${relativePath}: Missing 'description' in frontmatter`);
    }
  } catch (e) {
    errors.push(`${relativePath}: Invalid YAML frontmatter: ${e.message}`);
  }

  return errors;
}

// Main
const allFiles = findSkillFiles(SKILLS_DIR);
let totalErrors = 0;

for (const file of allFiles) {
  const errors = validateSkillFile(file);
  if (errors.length > 0) {
    errors.forEach(e => console.error(e));
    totalErrors += errors.length;
  }
}

if (totalErrors > 0) {
  console.error(`\n❌ Found ${totalErrors} error(s)`);
  process.exit(1);
} else {
  console.log(`✅ All ${allFiles.length} skill file(s) valid`);
}
