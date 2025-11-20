// MarkerManager.js
import { createRoot } from "react-dom/client";
import OpenSeadragon from "openseadragon";

export class MarkerManager {
  constructor(viewer) {
    this.viewer = viewer;
    this.markers = new Map();
  }

  addMarker(markerData, Component) {
    const div = document.createElement("div");
    div.id = `marker-${markerData.id}`;
    div.style.position = "absolute";
    div.style.willChange = "transform";

    // React render
    const root = createRoot(div);
    root.render(<Component mark={markerData} />);

    // Store reference
    this.markers.set(markerData.id, { div, root, data: markerData });

    // Attach to OSD
    this.viewer.addOverlay({
      element: div,
      location: new OpenSeadragon.Point(
        markerData.coordinate_x || markerData.x,
        markerData.coordinate_y || markerData.y
      ),
      placement: OpenSeadragon.Placement.CENTER,
    });
  }

  removeMarker(id) {
    const marker = this.markers.get(id);
    if (!marker) return;

    this.viewer.removeOverlay(marker.div);
    marker.root.unmount();
    this.markers.delete(id);
  }

  clear() {
    this.markers.forEach(m => {
      m.root.unmount();
      this.viewer.removeOverlay(m.div);
    });
    this.markers.clear();
  }
}
