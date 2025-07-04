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

## Project takeaways
### Tech Stack
- React
- TypeScript
- Vite
- Konva (Library to handle canvas)

### Highlights:
- Canvas logic encapsulated in a React component.
- Composable component using Compound pattern.
- State management via hooks and React context.
- Easier to expand with future UI elements (e.g., buttons, indicators)

### Pros:
- ✅ Easier to manage state with React.
- ✅ Cleaner separation of concerns and more readable code
- ✅ Scales better if adding more UI later
- ✅ Familiar dev experience if working in React-heavy codebase

### Cons:
- ❌ Overhead caused from React and other libraries installed
  - 20% bigger size than the other solution (20% Bigger build than [Vanilla TS solution](https://github.com/juanequis/canvas-img-slider))
- ❌ Less performant
- ❌ Slightly more complex setup (hooks, lifecycle)
- ❌ Steeper learning curve for Konva library to implement behavior correctly (Dragging examples were not very clear in the docs)

