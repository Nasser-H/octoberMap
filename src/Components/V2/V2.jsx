import React from 'react'
import DeepZoomViewer from '../OpenSeadragon/DeepZoomViewer';
import OverlayMarker from '../OpenSeadragon/OverlayMarker';
export default function V2() {
  const marks = [
        {
            "id": 1,
            "name": "Cairo",
            "iso_code": "EG",
            "coordinate_x": 5.43,
            "coordinate_y": -17 ,
            "country_map_img": "storage/assets/images/countries/maps/deepzoomfolders/690bc465814e31762378853/output_tiles5.dzi",
            "navigate_to": "cairo/october-map",
            "targetZoom": 15,
            "flag_icon": "assets/EgyptMap/media/Cairo.svg",
            "flag": "assets/tiles7/EgyptFlage.svg",
            "world_id": 1,
            "created_at": "2025-11-05T21:40:55.000000Z",
            "updated_at": "2025-11-16T09:45:05.000000Z",
            "zone": {
                "id": 1,
                "zone_img": "assets/OctoberMap/CairoWest.svg",
                "zone_img_hover": "assets/OctoberMap/CairoWestHover.svg",
                "name": "Cairo",
                "coordinate_x": 0.478125,
                "coordinate_y": 0.2759095833333334,
                "scale": 1,
                "country_id": 1,
                "world_id": 1,
                "created_at": "2025-11-05T21:41:52.000000Z",
                "updated_at": "2025-11-10T18:04:20.000000Z"
            }
        },
        {
            "id": 2,
            "name": "Hurghada",
            "iso_code": "UK",
            "coordinate_x": -9.3,
            "coordinate_y": -19.1,
            "country_map_img": "storage/assets/images/countries/maps/deepzoomfolders/691228a4ae1011762797732/Rectangle.dzi",
            "flag_icon": "assets/EgyptMap/media/Hurghada.svg",
            "flag": "assets/tiles7/UkFlage.svg",
            "world_id": 1,
            "created_at": "2025-11-10T18:02:12.000000Z",
            "updated_at": "2025-11-10T18:02:12.000000Z",
            "zone": {
                "id": 2,
                "zone_img": "assets/EgyptMap/media/HurghadaZone.svg",
                "zone_img_hover": "assets/EgyptMap/media/HurghadaZoneHover.svg",
                "name": "Hurghada",
                "coordinate_x": 0.6604829373666086,
                "coordinate_y": 0.3547061815179243,
                "scale": 1,
                "country_id": 2,
                "world_id": 1,
                "created_at": "2025-11-10T18:08:51.000000Z",
                "updated_at": "2025-11-10T18:08:51.000000Z"
            }
        }
    ];    
  return <>
  <DeepZoomViewer dziSource="./assets/v2/OctoberMap.dzi" maxZoomLevel={25} marks={marks} OverlayMarker={OverlayMarker} /> 
  </>
}