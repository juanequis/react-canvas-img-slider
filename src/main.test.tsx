import { describe, it, expect, vi } from 'vitest';

// Mock the createRoot function directly inside vi.mock
vi.mock('react-dom/client', () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

describe('main.tsx', () => {
  it('renders the App component into the root element', async () => {
    // Mock the root element in the DOM
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);

    // Dynamically import the main file (this will trigger the rendering logic)
    const { createRoot } = await import('react-dom/client');
    await import('./main');

    // Assert that createRoot was called with the root element
    expect(createRoot).toHaveBeenCalledWith(rootElement);

    // Clean up
    document.body.removeChild(rootElement);
  });
});