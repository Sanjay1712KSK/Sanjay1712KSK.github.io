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
        // Create dist/<route>/index.html so /resume/, /ayan-crafts/ and /inspirations/ load directly on GitHub Pages
        for (const route of ['resume', 'ayan-crafts', 'inspirations']) {
          const dir = path.join(distDir, route);
          fs.mkdirSync(dir, { recursive: true });
          fs.copyFileSync(indexHtml, path.join(dir, 'index.html'));
        }

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
