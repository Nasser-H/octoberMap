// viewer.js
import OpenSeadragon from "openseadragon";

export function initViewer(container, dziSource, maxZoomLevel = 5) {
return OpenSeadragon({
  element: container,
      prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
      tileSources: dziSource,
      showNavigator: false,
      animationTime: 0.75,
      blendTime: 0.15,
      zoomPerScroll: 1.2,
      minZoomLevel: 1,
      maxZoomLevel: maxZoomLevel || 5,
      //
      timeout: 120000,
      preserveImageSizeOnResize: true,
      imageLoaderLimit: 8,
      maxZoomPixelRatio: 2,
      tileCacheSize: 80,
      maxImageCacheCount: 80,
      loadTilesWithAjax: false,
      constrainDuringPan: true,
      debugMode: false,
      defaultZoomLevel: 1,
      navigationControlAnchor: OpenSeadragon.ControlAnchor.TOP_RIGHT,
      homeFillsViewer: true,
          immediateRender: false,
      autoResize: true,
      background: 'black',
      visibilityRatio: 1,
      minZoomImageRatio: 0.7,
      drawerOptions: {
        webgl: false,
        canvas: true,
      },
      smoothTileEdgesMinZoom: 0,
      gestureSettingsMouse: {
        clickToZoom: false,
        dblClickToZoom: true,
      },
      showNavigationControl: true,
      showZoomControl: true,
      showHomeControl: true,
      showFullPageControl: true,
      showRotationControl: true,
      showFlipControl: true,
      showSequenceControl: true,
      rotateRightButton: null,
      rotateLeftButton: null,
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