"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Import the necessary marker images
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
export const LocationTab = () => {
  const [location, setLocation] = useState<string>("");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocation("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(success, handleError);
  };

  useEffect(() => {
    getLocation();
    console.log(location);

    L.Icon.Default.mergeOptions({
      iconUrl: markerIcon.src,
      shadowUrl: markerShadow.src,
    });
  }, []);
  useEffect(() => {
    console.log(location, "haha");
    console.log(location.split(",")[0]);
  }, [location]);
  const defaultIcon = L.icon({
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    shadowSize: [41, 41], // size of the shadow
  });

  L.Marker.prototype.options.icon = defaultIcon;
  const success = (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setLocation(`${lat} ,${lon}`);
    console.log(`${lat} ,${lon}`);
  };

  const handleError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setLocation("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setLocation("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setLocation("The request to get user location timed out.");
        break;
      default:
        setLocation("An unknown error occurred.");
        break;
    }
  };

  return (
    <div className="w-full">
      {location.length === 0 ? (
        <MapContainer
          center={[47.8864, 106.9057]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[300px] w-full rounded-xl z-1"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[47.8864, 106.9057]}>
            <Popup>Ulaanbaatar, default location</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <MapContainer
          center={[
            Number(location.split(",")[0]),
            Number(location.split(",")[1]),
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
              Number(location.split(",")[0]),
              Number(location.split(",")[1]),
            ]}
          >
            <Popup>Your current location</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};
