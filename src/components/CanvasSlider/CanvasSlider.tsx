import { useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import CanvasSliderContext from './CanvasSliderContext';
import styles from './CanvasSlider.module.css';

interface CanvasSliderProps {
  children: React.ReactNode[];
  width: number;
  height: number;
}

const CanvasSlider = (props: CanvasSliderProps) => {
  const stageRef = useRef(null);
  const { children, width, height } = props;

  const contextValue = {
    stageRef,
    width,
    height,
    index: 0,
  };

  return (
    <CanvasSliderContext.Provider value={contextValue}>
      <Stage
        width={width}
        height={height}
        draggable
        dragBoundFunc={(pos) => {
          const maxOffset = 0;
          const minOffset = -(children.length - 1) * width;
          const constrainedX = Math.max(minOffset, Math.min(maxOffset, pos.x));

          return { x: constrainedX, y: 0 };
        }}
        ref={stageRef}
        className={styles.slider}
      >
        <Layer>
          {children.map((child, index) => (
            <CanvasSliderContext.Provider value={{ ...contextValue, index }}>
              {child}
            </CanvasSliderContext.Provider>
          ))}
        </Layer>
      </Stage>
    </CanvasSliderContext.Provider>
  );
};

export { CanvasSlider };