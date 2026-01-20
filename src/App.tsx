import "@google/model-viewer";
import "./App.css";

const MODEL_SRC = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";
const POSTER_SRC =
  "https://modelviewer.dev/shared-assets/models/Astronaut.webp";

function App() {
  return (
    <main className="viewer-page">
      <model-viewer
        className="viewer-frame"
        src={MODEL_SRC}
        poster={POSTER_SRC}
        alt="Astronaut model"
        ar
        autoRotate
        cameraControls
        environmentImage="neutral"
        exposure="1.1"
        shadowIntensity="0.85"
        shadowSoftness="0.9"
      />

      {/* <section className="hud">
        <p className="eyebrow">Live 3D Demo</p>
        <h1>Full-Page Model Viewer</h1>
        <p className="lede">
          Drag to orbit, scroll to zoom, and tap AR on supported devices to drop
          the astronaut into your space.
        </p>
      </section> */}
    </main>
  );
}

export default App;
