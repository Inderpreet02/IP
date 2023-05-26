import React from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaXRzanVzdGJsdWUiLCJhIjoiY2xnc2JwZzY5MGpsazNncXZ0bzhzZGtlbSJ9.C2MABRa1vlZb0j5FksReXA";

const Map = ({ pickupCoordinates, dropoffCoordinates }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [76, 30.65979925767185],
      zoom: 6,
    });

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }
    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([pickupCoordinates, dropoffCoordinates], {
        padding: 60,
      });
    }
    var timer;
    if(pickupCoordinates !== undefined){
      timer = setTimeout(() => {
        getRoute(map, pickupCoordinates, dropoffCoordinates);        
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  async function getRoute(map, start, end) {
    console.log(start, end);
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
      { method: "GET" }
    );
    const json = await query.json();
    const data = json.routes[0];
    const route = data?.geometry.coordinates;
    const geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };
    if (map.getSource("route")) {
      map.getSource("route").setData(geojson);
    }
    else {
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#60a05b",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
    }
  }

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
  flex-1 h-1/2
`;
