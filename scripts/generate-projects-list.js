import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsDir = path.join(__dirname, '../public/projects');
const outputFile = path.join(__dirname, '../public/projects-index.json');

async function generateProjectsIndex() {
  const files = await glob(path.join(projectsDir, '*.md').replace(/\\/g, '/'));
  
  const projects = files.map((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    const { data } = matter(content);
    
    // Ensure the ID matches the filename if not provided
    const id = data.id || path.basename(file, '.md');
    
    return {
      ...data,
      id,
      // Create a URL-friendly path to the markdown file
      source: `/projects/${path.basename(file)}`
    };
  });

  // Sort by date (newest first)
  projects.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

  fs.writeFileSync(outputFile, JSON.stringify(projects, null, 2));
  console.log(`Generated project index with ${projects.length} projects.`);
}

generateProjectsIndex();
