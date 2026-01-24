import { useState } from "react";

import "@google/model-viewer";
import "./App.css";

type ModelOption = {
  id: string;
  name: string;
  src: string;
  poster: string;
  alt: string;
};

const MODEL_OPTIONS: ModelOption[] = [
  {
    id: "fort-alpha",
    name: "Fort Alpha Aula",
    src: "https://ofcf7mq0bmhf3l4k.public.blob.vercel-storage.com/Fort_Alpha_Aula_V1-Ybi5fcgolUy34uubI9AGc1MDxqwC1d.glb",
    poster: "https://modelviewer.dev/assets/poster-astronaut.png",
    alt: "Fort Alpha Aula architectural model",
  },
  {
    id: "robot-expressive",
    name: "Robot",
    src: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
    poster: "https://modelviewer.dev/shared-assets/models/RobotExpressive.webp",
    alt: "Expressive robot character model",
  },
];

function App() {
  const [activeModelId, setActiveModelId] = useState(MODEL_OPTIONS[0].id);
  const activeModel =
    MODEL_OPTIONS.find((entry) => entry.id === activeModelId) ??
    MODEL_OPTIONS[0];

  return (
    <main className="viewer-page">
      <div className="model-picker">
        <label htmlFor="model-select">Model</label>
        <select
          id="model-select"
          value={activeModelId}
          onChange={(event) => setActiveModelId(event.target.value)}
        >
          {MODEL_OPTIONS.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <model-viewer
        className="viewer-frame"
        src={activeModel.src}
        poster={activeModel.poster}
        alt={activeModel.alt}
        ar
        autoRotate
        cameraControls
        environmentImage="neutral"
        exposure="1.1"
        shadowIntensity="0.85"
        shadowSoftness="0.9"
      />
    </main>
  );
}

export default App;
