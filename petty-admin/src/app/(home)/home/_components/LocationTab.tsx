import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const center = L.latLng(47.920282353418955, 106.91735744689677);

function DraggableMarker(props: {
  handleChange: (name: string, value: string) => void;
}) {
  const { handleChange } = props;
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState<LatLng>(center);
  const markerRef = useRef<L.Marker | null>(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  useEffect(() => {
    const value =
      position
        .toString()
        .split("LatLng")[1]
        .split(")")[0]
        .split("(")[1]
        .split(",")[0] +
      "," +
      position
        .toString()
        .split("LatLng")[1]
        .split(")")[0]
        .split("(")[1]
        .split(",")[1]
        .trim();
    handleChange("location", value);
  }, [position]);

  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);
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
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
}

export const MapWithDraggableMarker = (props: {
  handleChange: (name: string, value: string) => void;
}) => {
  const { handleChange } = props;

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "300px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker handleChange={handleChange} />
    </MapContainer>
  );
};
