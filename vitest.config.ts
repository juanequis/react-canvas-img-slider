import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // Use jsdom for DOM-like testing
    // setupFiles: './vitest.setup.ts', // Optional: Add setup file for global mocks
  },
});