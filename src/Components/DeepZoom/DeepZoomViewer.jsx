import OpenSeadragon from 'openseadragon';
import React, { useEffect, useRef } from 'react';

export default function DeepZoomViewerMobile({ dziSource, maxZoomLevel = 10 }) {
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = OpenSeadragon({
      element: viewerRef.current,
      prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
      tileSources: dziSource,
      showNavigator: false,
      animationTime: 0.4,       // أسرع حركة
      blendTime: 0.1,           // دمج أسرع للـ tiles
      zoomPerScroll: 1.1,       // أقل zoom لكل scroll
      minZoomLevel: 1,
      maxZoomLevel: maxZoomLevel,
      imageLoaderLimit: 6,      // أقل ضغط على الموبايل
      preserveImageSizeOnResize: true,
      constrainDuringPan: true,
      background: 'black',
      drawerOptions: {
        webgl: false,           // canvas فقط
        canvas: true,
      },
      gestureSettingsMouse: {
        clickToZoom: false,
        dblClickToZoom: true,
        scrollToZoom: true,
      },
      showNavigationControl: false,  // أخف للـ mobile
      showZoomControl: true,
      autoResize: true,
    });

    // function to fit image to screen
    const fillScreen = () => {
      const item = viewer.world.getItemAt(0);
      const viewport = viewer.viewport;
      if (!item || !viewport) return;

      const imageBounds = item.getBounds();
      const imageAspect = imageBounds.width / imageBounds.height;
      const containerSize = viewport.getContainerSize();
      const containerAspect = containerSize.x / containerSize.y;

      let targetZoom;
      if (imageAspect > containerAspect) {
        targetZoom = containerAspect / imageAspect;
      } else {
        targetZoom = 1;
      }

      viewport.zoomTo(targetZoom, null, false);
      viewport.panTo(viewport.getHomeBounds().getCenter(), false);
      viewport.applyConstraints();
    };

    viewer.addHandler("open", fillScreen);

    return () => viewer.destroy();
  }, [dziSource, maxZoomLevel]);

  return <div ref={viewerRef} style={{ width: '100%', height: '100vh', overflow: 'hidden' }} />;
}
