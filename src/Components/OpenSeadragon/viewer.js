// viewer.js
import OpenSeadragon from "openseadragon";

export function initViewer(container, dziSource, maxZoomLevel = 5) {
  return OpenSeadragon({
    element: container,
    prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
    tileSources: dziSource,

    // UNIVERSAL PERFORMANCE SETTINGS
    animationTime: deviceConfig.animationTime,
    blendTime: 0.15,
    imageLoaderLimit: deviceConfig.imageLoaderLimit,
    tileCacheSize: deviceConfig.tileCacheSize,
    maxImageCacheCount: deviceConfig.maxImageCacheCount,
    maxZoomPixelRatio: deviceConfig.maxZoomPixelRatio,
    minZoomLevel: deviceConfig.minZoomLevel,
    maxZoomLevel,
    homeFillsViewer: true,
    preserveImageSizeOnResize: false,
    springStiffness: deviceConfig.springStiffness,
    immediateRender: false,
    defaultZoomLevel: 1,
    visibilityRatio: 1,

    // RENDERER CONFIG
    drawerOptions: {
      webgl: true,
      webglOptions: {
        preserveDrawingBuffer: false,
        antialias: false,
      },
      // fallback to canvas automatically if WebGL fails
    },

    // INPUT CONTROLS
    gestureSettingsMouse: {
      clickToZoom: false,
      dblClickToZoom: true,
      scrollToZoom: true,
      pinchToZoom: true,
      flickEnabled: false,
    },

    // TOUCH CONTROLS (mobile/tablet)
    gestureSettingsTouch: {
      clickToZoom: false,
      dblClickToZoom: false,
      dragToPan: true,
      flickEnabled: true,
      flickMomentum: 0.25,
      scrollToZoom: false, // prevents accidental zoom
      pinchToZoom: true,
    },

    // UI
    showNavigator: !isMobile,
    showNavigationControl: !isMobile, // hide on phone
    autoResize: true,
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