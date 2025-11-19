import interact from 'interactjs';
import OpenSeadragon from 'openseadragon';
import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from "react-dom/client";

export default function DeepZoomViewer({dziSource , marks , OverlayMarker, maxZoomLevel}) {
  const viewerRef = useRef(null);
  useEffect(() => {
    const viewer = OpenSeadragon({
      element: viewerRef.current,
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

async function markerPins() {
  const tiledImage = viewer.world.getItemAt(0);
  if (!tiledImage) return;

  const bigImageWidth = tiledImage.source.dimensions.x;
  const bigImageHeight = tiledImage.source.dimensions.y;

//   marks.forEach((mark) => {

//     const wrapper = document.createElement('div');
//     wrapper.id = `${mark.name}-${mark.id}`;
//     wrapper.className = `marker-${mark.name}-${mark.id} group cursor-pointer`;
//     wrapper.dataset.id = mark.id;

//     const root = createRoot(wrapper);

//     root.render(
//       <OverlayMarker
//         mark={mark}
//         bigImageWidth={bigImageWidth}
//         bigImageHeight={bigImageHeight}
//         ZoneOnLoad={(naturalWidth, naturalHeight) => {
//           if (!naturalWidth || !naturalHeight) {
//             console.warn("IMAGE DID NOT LOAD PROPERLY FOR: ", mark.name);
//             return;
//           }

//           const width = naturalWidth / bigImageWidth;
//           const height = naturalHeight / bigImageHeight;
//           viewer.addOverlay({
//             element: wrapper,
//             location: new OpenSeadragon.Point(
//               mark.zone.coordinate_x,
//               mark.zone.coordinate_y
//             ),
//             placement: OpenSeadragon.Placement.CENTER,
//             width,
//             height
//           });
//             // interact(wrapper).draggable({
//             //     listeners: {
//             //       start () {
//             //         viewer.gestureSettingsMouse.dragToPan = false;
//             //       },
//             //       end(event){
//             //           const point = new OpenSeadragon.Point(event.clientX, event.clientY);
//             //           viewer.gestureSettingsMouse.dragToPan = true;
//             //         },
//             //         move (event) {
//             //           const point = new OpenSeadragon.Point(event.clientX, event.clientY);
//             //           const viewportPoint = viewer.viewport.pointFromPixel(point);              
//             //           viewer.updateOverlay(wrapper, viewportPoint);
//             //         },
//             //     }
//             // });  
// new OpenSeadragon.MouseTracker({
//   element: wrapper,
//   pressHandler: function(event) {
//     wrapper.startPos = event.position.clone(); // حفظ نقطة البداية
//   },
//   releaseHandler: function(event) {
//     // حساب المسافة
//     const dx = event.position.x - wrapper.startPos.x;
//     const dy = event.position.y - wrapper.startPos.y;
//     const distance = Math.sqrt(dx*dx + dy*dy);

//     const clickThreshold = 5; // البكسل اللي يعتبر click حقيقي
//     if (distance > clickThreshold) return; // تجاهل الحركة

//     // click فعلي
//     event.preventDefaultAction = true;
//     const overlay = viewer.getOverlayById(wrapper.id || wrapper);
//     if (!overlay) return;

//     const position = overlay.location;
//     const newData = {
//       x: position.x,
//       y: position.y
//     };
//     if(mark.navigate_to && mark.targetZoom){
//       const point = new OpenSeadragon.Point(mark.zone.coordinate_x, mark.zone.coordinate_y);
//       viewer.viewport.panTo(point, false);
//       viewer.viewport.zoomTo(mark.targetZoom , point, false);
//       const onFinish = () => {
//         setTimeout(() => {
//           viewer.removeHandler("animation-start", onFinish);
//         }, 700);
//       };      
//       viewer.addHandler("animation-start", onFinish);
//       console.log("Marker clicked:", newData);
//     }
//   }
// });

//         }}
//       />
//     );
//   });
}


    function fillScreen() {
        const item = viewer.world.getItemAt(0);
        const viewport = viewer.viewport;
        if (!item || !viewport) return;
        const imageBounds = item.getBounds();
        const imageAspect = imageBounds.width / imageBounds.height;
        const containerSize = viewport.getContainerSize();
        const containerAspect = containerSize.x / containerSize.y;
        let zoom,targetZoom;
        if (imageAspect > containerAspect) {
            zoom = containerAspect / imageAspect; // fit width
            targetZoom = viewport.getHomeZoom() / zoom;
        } else {
            targetZoom = viewport.getHomeZoom();
        }
        viewport.zoomTo(targetZoom, null, false);
        viewport.panTo(viewport.getHomeBounds().getCenter(), false);
        viewer.viewport.minZoomLevel = targetZoom ;
        // viewer.viewport.maxZoomLevel = targetZoom ;
        viewport.applyConstraints();
    }   
    viewer.addHandler("open", fillScreen);
    viewer.addHandler("animation", ()=>{console.log(viewer.viewport.getZoom());
    });
    viewer.addHandler("animation-finish", () => viewer.viewport.applyConstraints());
    viewer.addHandler("animation-start", () => viewer.viewport.applyConstraints());
    viewer.addHandler("animation", () => viewer.viewport.applyConstraints());
    viewer.addHandler("open",markerPins);
    return () => {
      window.removeEventListener("resize", fillScreen);
      viewer.destroy();
    };
  }, []);
  return <>
      <div
      id="deep-zoom-viewer"
      ref={viewerRef}
      style={{ width: '100%', height: '100vh', overflow: 'hidden' }}
    />
  </>
}
