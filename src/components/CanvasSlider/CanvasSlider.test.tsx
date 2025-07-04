import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CanvasSlider } from './CanvasSlider';
import { Image } from './Image';

describe('CanvasSlider', () => {
  it('renders correctly', () => {
    const { container } = render(
      <CanvasSlider width={640} height={400}>
        <Image src="mock-image-1.jpg" />
        <Image src="mock-image-2.jpg" />
      </CanvasSlider>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
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
      </div>
    `);
  });
});