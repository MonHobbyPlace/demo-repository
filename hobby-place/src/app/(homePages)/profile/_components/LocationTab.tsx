"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Import the necessary marker images
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
const LocationTab = (props: { location: string }) => {
  const { location } = props;

  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconUrl: markerIcon.src,
      shadowUrl: markerShadow.src,
    });
  }, []);

  const defaultIcon = L.icon({
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    shadowSize: [41, 41], // size of the shadow
  });

  L.Marker.prototype.options.icon = defaultIcon;

  return (
    <div className="w-full">
      {location && (
        <MapContainer
          center={[
            Number(location?.split(",")[0]),
            Number(location?.split(",")[1]),
          ]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[300px] w-full rounded-xl z-1"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[
              Number(location?.split(",")[0]),
              Number(location?.split(",")[1]),
            ]}
          >
            <Popup>Your current location</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};
export default LocationTab;
