// viewer.js
import OpenSeadragon from "openseadragon";

export function initViewer(container, dziSource, maxZoomLevel = 5) {
return OpenSeadragon({
  element: container,
  prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
  tileSources: dziSource,

  // Performance
  animationTime: 0.9,
  blendTime: 0.15,
  imageLoaderLimit: 20,
  tileCacheSize: 500,
  maxImageCacheCount: 2000,
  maxZoomPixelRatio: 1.1,

  // Zoom & Pan
  zoomPerScroll: 1.2,
  minZoomLevel: 1,
  maxZoomLevel,
  homeFillsViewer: true,
  preserveImageSizeOnResize: false,

  // Animation (smoothness)
  springStiffness: 5,
  immediateRender: false,
  defaultZoomLevel: 1,
  visibilityRatio: 1,

  // Renderer
  drawerOptions: {
    webgl: true,
    canvas: false,
  },

  gestureSettingsMouse: {
    clickToZoom: false,
    dblClickToZoom: true,
  },

  showNavigator: false,
  showNavigationControl: true,
  background: "black",
});
  // return OpenSeadragon({
  //   element: container,
  //   prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
  //   tileSources: dziSource,

  //   // Performance
  //   animationTime: 1.75,
  //   blendTime: 0.15,
  //   loadTilesWithAjax: false,
  //   imageLoaderLimit: 6,
  //   tileCacheSize: 60,
  //   maxImageCacheCount: 60,
  //   maxZoomPixelRatio: 2,

  //   // Zoom & Pan
  //   zoomPerScroll: 1.2,
  //   minZoomLevel: 1,
  //   maxZoomLevel,
  //   homeFillsViewer: true,
  //   preserveImageSizeOnResize: true,
    
  //   // Animation settings
  //   springStiffness: 6.5,
  //   immediateRender: true,

  //   // UI
  //   showNavigator: false,
  //   showNavigationControl: true,

  //   // Canvas better for iPad
  //   drawerOptions: {
  //     webgl: false,
  //     canvas: true,
  //   },
  //   // Additional settings
  //   constrainDuringPan: true,
  //   debugMode: false,
  //   defaultZoomLevel: 1,
  //   autoResize: true,
  //   visibilityRatio: 1,
  //   smoothTileEdgesMinZoom: 0,
  //   gestureSettingsMouse: {
  //     clickToZoom: false,
  //     dblClickToZoom: true,
  //   },

  //   background: "black",
  // });
}