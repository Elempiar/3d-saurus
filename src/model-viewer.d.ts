import type { JSX as ReactJSX } from "react";
/// <reference types="@google/model-viewer" />

// Add React JSX typing for the <model-viewer> web component
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ReactJSX.IntrinsicElements["div"] & {
        src?: string;
        poster?: string;
        alt?: string;
        ar?: boolean | "";
        autoRotate?: boolean | "";
        cameraControls?: boolean | "";
        environmentImage?: string;
        exposure?: number | string;
        shadowIntensity?: number | string;
        shadowSoftness?: number | string;
      };
    }
  }
}
