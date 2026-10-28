import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function githubPagesRouting(): Plugin {
  return {
    name: 'github-pages-routing',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexHtml = path.join(distDir, 'index.html');

      if (fs.existsSync(indexHtml)) {
        // Create dist/resume/index.html for direct navigation to /resume/
        const resumeDir = path.join(distDir, 'resume');
        if (!fs.existsSync(resumeDir)) {
          fs.mkdirSync(resumeDir, { recursive: true });
        }
        fs.copyFileSync(indexHtml, path.join(resumeDir, 'index.html'));

        // Create dist/404.html for SPA fallback on GitHub Pages
        fs.copyFileSync(indexHtml, path.join(distDir, '404.html'));
      }
    }
  };
}

export default defineConfig({
  base: '/',
  plugins: [react(), githubPagesRouting()],
});
