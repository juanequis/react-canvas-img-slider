import { useContext } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import CanvasSliderContext from './CanvasSliderContext';

interface CanvasSliderImageProps {
  src: string;
}

const CanvasSliderImage = (props: CanvasSliderImageProps) => {
  const { width, height, index } = useContext(CanvasSliderContext);
  const { src } = props;
  const [image] = useImage(src);

  if (!image) return null;

  const aspectRatio = image.width / image.height;
  const canvasAspectRatio = width / height;

  let drawWidth = width;
  let drawHeight = height;

  /** Depending on the aspect ratio, adjust the dimensions */
  if (aspectRatio > canvasAspectRatio) {
    drawWidth = width;
    drawHeight = width / aspectRatio;
  } else {
    drawHeight = height;
    drawWidth = height * aspectRatio;
  }

  return (
    <Image
      image={image}
      x={index * width + (width - drawWidth) / 2} // The offset for the current image + the distance to center it
      y={(height - drawHeight) / 2}
      width={drawWidth}
      height={drawHeight}
    />
  );
};

export { CanvasSliderImage as Image };