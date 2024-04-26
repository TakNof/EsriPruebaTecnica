import React, { useEffect } from 'react';

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Zoom from "@arcgis/core/widgets/Zoom.js";
import Portal from "@arcgis/core/portal/Portal.js";
import Expand from "@arcgis/core/widgets/Expand.js";
import PortalBasemapsSource from "@arcgis/core/widgets/BasemapGallery/support/PortalBasemapsSource.js";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery.js";

const MapComponent = () => {
    useEffect(() => {
        const portal = new Portal();

      const source = new PortalBasemapsSource({
        portal,
        query: {
          id: "bdb9d65e0b5c480c8dcc6916e7f4e099"
        }
      });

      const layer = new FeatureLayer({
        portalItem: {
          id:"8d26f04f31f642b6828b7023b84c2188",
        }
      });

      const map = new Map({
        basemap: "topo-vector",
        layers:[layer]
      });
  
      const view = new MapView({
        container: "mapDiv",
        map: map,
        center: [-74.051, 4.673],
        zoom: 18,
        ui :{
          components: ["attribution"]
        }
      });
      let zoom = new Zoom({
        view: view
      });

      view.ui.add(zoom, "top-left");

      const bgExpand = new Expand({
        view,
        content: new BasemapGallery({ source, view }),
        expandIcon: "basemap"
      });

      view.ui.add(bgExpand, "top-right");
    }, []);
     
    return(
        <div id="mapDiv"></div>
    );
  };
  
  export default MapComponent;