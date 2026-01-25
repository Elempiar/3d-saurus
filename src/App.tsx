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
    id: "fort-alpha-aula-v1",
    name: "Fort Alpha Aula v1",
    src: "https://ofcf7mq0bmhf3l4k.public.blob.vercel-storage.com/Aula_25_V1-qkj8GWusZJlYhVPM8AhDuUIBY9aFSp.glb",
    poster: "https://modelviewer.dev/assets/poster-astronaut.png",
    alt: "Fort Alpha Aula architectural model",
  },
  {
    id: "aula-25-v2",
    name: "Fort Alpha Aula v2",
    src: "https://ofcf7mq0bmhf3l4k.public.blob.vercel-storage.com/Aula_25_V2-RQ6J8gcYstW0nGMkZG1HHFknJ2ZpGd.glb",
    poster: "",
    alt: "Fort Alpha Aula architectural model",
  },
  {
    id: "chair-model",
    name: "Stoel",
    src: "https://ofcf7mq0bmhf3l4k.public.blob.vercel-storage.com/Chair_25_V1-i3fawO4RlPyqDDYTLSU1Pe67OiSQXk.glb",
    poster: "",
    alt: "Chair model",
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
