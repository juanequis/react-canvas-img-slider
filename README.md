# react-canvas-img-slider
React Image Slider with canvas

## Running in static server
- Static assets are in `/dist` folder.
- User your preferred static file server to run the compiled version.

## Architecture
- `CanvasSlider`: Compound component that renders the Images inside the canvas and handles Dragging.
    - `CanvasSlider.Image`: Children component that given an image renders inside the canvas with the correct dimensions and positioning.

## Running the Project Locally
```sh
npm install
npm run dev
```

## Running tests
```sh
npm run test
npm run test:coverage
```