import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders correctly', () => {
    const { container } = render(<App />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <main
          class="_root_48b8bb"
        >
          <h1>
            React Canvas Image Slider
          </h1>
          <div
            class="_slider_3380a1"
          >
            <div
              class="konvajs-content"
              role="presentation"
              style="position: relative; user-select: none; width: 640px; height: 400px;"
            >
              <canvas
                height="400"
                style="padding: 0px; margin: 0px; border: 0px; background: transparent; position: absolute; top: 0px; left: 0px; width: 640px; height: 400px; display: block;"
                width="640"
              />
            </div>
          </div>
          <small>
            Drag to change image
          </small>
        </main>
      </div>
    `);
  });
});