import { VehicleRead } from "../../../testservices";
import { useMemo } from "react";
import { calculateVehicleStatus } from "./statusUtils";

export default function useStatusCount(vehicles: VehicleRead[]){
    return useMemo(() => {
        const counts = vehicles.reduce((acc: { [key: string]: number }, vehicle) => {
            const status = calculateVehicleStatus(vehicle.assigned_bundle_name || "", vehicle.installed_bundle_name || "");
            acc[status] = (acc[status] || 0 ) + 1;
            return acc
        }, {})

        return counts;
    }, [vehicles])
}