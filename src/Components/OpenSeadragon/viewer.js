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
      timeout: 5000,
      preserveImageSizeOnResize: false,
      imageLoaderLimit: 8,
      maxZoomPixelRatio: 2,
      // tileCacheSize: 500,
      maxImageCacheCount: 200,
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
        webgl: true,
        canvas: false,
      },
      // mobile
      imageSmoothingEnabled: true,
      springStiffness: 60,
      smoothTileEdgesMinZoom: 1.25,
      gestureSettingsTouch: {
        pinchRotate: false,
        flickEnabled: true,
      },
      
      gestureSettingsMouse: {
        clickToZoom: false,
        dblClickToZoom: true,
      },
      showNavigationControl: false,
      showZoomControl: false,
      showHomeControl: false,
      showFullPageControl: false,
      showRotationControl: false,
      showFlipControl: false,
      showSequenceControl: false,
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