import styles from './App.module.css';
import { CanvasSlider } from './components/CanvasSlider';

import img0 from './assets/0.jpg';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';

function App() {
  return (
    <main className={styles.root}>
      <h1>React Canvas Image Slider</h1>
      <CanvasSlider width={640} height={400}>
        <CanvasSlider.Image src={img0} />
        <CanvasSlider.Image src={img1} />
        <CanvasSlider.Image src={img2} />
        <CanvasSlider.Image src={img3} />
      </CanvasSlider>
      <small>Drag to change image</small>
    </main>
  );
}

export default App;
