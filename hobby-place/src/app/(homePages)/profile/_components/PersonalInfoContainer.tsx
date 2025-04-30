"use client";
import { useProfile } from "@/app/provider/ProfileProvider";
import { LocationTab } from "./LocationTab";
import { useEffect, useState } from "react";

export const PersonalInfoContainer = () => {
  const { user } = useProfile();
  const [location, setLocation] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocation("Geolocation is not supported by this browser.");
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(success, handleError);
  };

  useEffect(() => {
    getLocation();
  }, []);

  const success = (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setLocation(`${lat} ,${lon}`);
    setLoading(false);
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
    setLoading(false);
  };
  return (
    <div>
      <div className="flex w-full justify-between py-2">
        <p>Email</p>
        <p className="w-1/2">{user?.email}</p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p>Location</p>
        {loading ? <div>...loading</div> : <LocationTab location={location} />}
      </div>
    </div>
  );
};
