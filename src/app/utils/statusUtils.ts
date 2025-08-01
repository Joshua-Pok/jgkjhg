import { VehicleStatus } from "../types";

export const calculateVehicleStatus = (
  assignedBundle: string, 
  installedBundle: string
): VehicleStatus => {
  if (assignedBundle === installedBundle && assignedBundle !== "") {
    return VehicleStatus.Updated;
  } else if (assignedBundle !== installedBundle && assignedBundle !== "") {
    return VehicleStatus.RestartRequired;
  } else {
    return VehicleStatus.NotInstalled;
  }
}; 