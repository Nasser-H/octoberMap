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
    this.viewer.addHandler("open", () => {

      const item = this.viewer.world.getItemAt(0);
      const viewport = this.viewer.viewport;
      if (!item || !viewport) return;
      const imageBounds = item.getBounds();
      const imageAspect = imageBounds.width / imageBounds.height;
      const containerSize = viewport.getContainerSize();
      const containerAspect = containerSize.x / containerSize.y;
      let zoom, targetZoom;
      if (imageAspect > containerAspect) {
        zoom = containerAspect / imageAspect; // fit width
        targetZoom = viewport.getHomeZoom() / zoom;
      } else {
        targetZoom = viewport.getHomeZoom();
      }
      viewport.zoomTo(targetZoom, null, false);
      viewport.panTo(viewport.getHomeBounds().getCenter(), false);
      this.viewer.viewport.minZoomLevel = targetZoom;
      // this.viewer.viewport.maxZoomLevel = targetZoom ;
      viewport.applyConstraints();
    });
    this.viewer.addHandler("animation-finish", () => this.viewer.viewport.applyConstraints());
    this.viewer.addHandler("animation-start", () => this.viewer.viewport.applyConstraints());
    this.viewer.addHandler("animation", () => this.viewer.viewport.applyConstraints());
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
