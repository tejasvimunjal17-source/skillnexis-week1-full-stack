import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config: enables JSX support and the React dev server.
export default defineConfig({
  plugins: [react()],
});
