import { useMemo } from "react";
import { VehicleRead } from "../../../testservices";

export const useGroupCount = (vehicles: VehicleRead[]) => {
  return useMemo(() => {
    let result = new Map<string, number>();
  result.set('', vehicles.length);
  for(const vehicle of vehicles){
    if(vehicle.assigned_group_name === null || vehicle.assigned_group_name === undefined){
      continue;
    } else {
      result.set(
        vehicle.assigned_group_name, 
        (result.get(vehicle.assigned_group_name) || 0) + 1
      );
    }
  }
  
  return result;
  }, [vehicles])
  
}