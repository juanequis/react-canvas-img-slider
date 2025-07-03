import { useContext } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import CanvasSliderContext from './CanvasSliderContext';

interface ImageWithAspectRatioProps {
  src: string;
}

const ImageWithAspectRatio = (props: ImageWithAspectRatioProps) => {
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
      x={index * width + (width - drawWidth) / 2} // Center the image horizontally in its slot
      y={(height - drawHeight) / 2}
      width={drawWidth}
      height={drawHeight}
    />
  );
};

export { ImageWithAspectRatio as Image };