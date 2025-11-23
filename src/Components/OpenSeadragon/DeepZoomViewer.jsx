import React, { useEffect, useRef } from "react";
import { initViewer } from "./viewer";
import { MarkerManager } from "./MarkerManager";
import { EventManager } from "./EventManager";

export default function DeepZoomViewer({ dziSource, marks , OverlayMarker, maxZoomLevel }) {
  const viewerRef = useRef();

  useEffect(() => {
    const viewer = initViewer(viewerRef.current, dziSource, maxZoomLevel);
    const markerManager = new MarkerManager(viewer);

    viewer.addHandler("open", () => {
      marks.forEach(m => markerManager.addMarker(m, OverlayMarker));
    });

    new EventManager(viewer, markerManager, viewerRef.current);

    return () => {
      markerManager.clear();
      viewer.destroy();
    };
  }, []);

  return (
    <div
      ref={viewerRef}
      style={{ width: "100%", height: "100vh", background: "black" }}
    ></div>
  );
}
