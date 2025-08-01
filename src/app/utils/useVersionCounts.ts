import { useMemo } from "react";
import { VehicleRead } from "../../../testservices";

export default function useVersionCounts(vehicles: VehicleRead[]) {
  return useMemo(() => {
    if (!Array.isArray(vehicles) || vehicles.length === 0) {
    return [];
  }
  
  const counts = vehicles.reduce((acc: { [key: string]: number }, vehicle) => {
    const version = vehicle.assigned_bundle_name || "Unknown";
    acc[version] = (acc[version] || 0) + 1;
    return acc;
  }, {}); 

  return Object.entries(counts).map(([version, count]) => ({
    version,
    count,
  }));

  }, [vehicles])
  
  //returns array of objects with each object representing a version
}