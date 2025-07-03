import { createContext } from 'react';

const CanvasSliderContext = createContext({
  width: 0,
  height: 0,
  index: 0,
});

export default CanvasSliderContext;