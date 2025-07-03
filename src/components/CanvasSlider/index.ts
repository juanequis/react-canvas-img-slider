import type { ReactElement } from 'react';
import { CanvasSlider as CanvasSliderComponent } from './CanvasSlider';
import { Image } from './Image';

interface CanvasSliderType {
  (props: React.ComponentProps<typeof CanvasSliderComponent>): ReactElement;
  Image: typeof Image;
}

const CanvasSlider: CanvasSliderType = Object.assign(CanvasSliderComponent, {
  Image,
});

export { CanvasSlider };