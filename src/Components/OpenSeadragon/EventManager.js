// EventManager.js
export class EventManager {
  constructor(viewer, markerManager) {
    this.viewer = viewer;
    this.markers = markerManager;

    this.attach();
  }

  attach() {
    this.viewer.addHandler("canvas-click", (ev) => {
      const clickedElement = ev.originalEvent.target;

      if (clickedElement.closest(".marker-wrapper")) {
        const id = clickedElement.closest(".marker-wrapper").id;
        this.onMarkerClick(id);
      }
    });

    this.viewer.addHandler("animation", () => {
      // Throttle scale updates
      requestAnimationFrame(() => {
        const zoom = this.viewer.viewport.getZoom(true);
        document.documentElement.style.setProperty(
          "--marker-scale",
          Math.min(zoom * 0.5, 2)
        );
      });
    });
  }

  onMarkerClick(id) {
    const marker = this.markers.markers.get(Number(id.replace("marker-", "")));
    if (!marker) return;

    const { x, y, targetZoom } = marker.data;
    const point = new OpenSeadragon.Point(x, y);

    this.viewer.viewport.panTo(point, false);
    if (targetZoom) this.viewer.viewport.zoomTo(targetZoom, point, false);
  }
}
