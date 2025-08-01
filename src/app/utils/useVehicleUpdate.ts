import { useCallback } from 'react';
import { notification } from 'antd';
import { VehicleService, VehicleRead, VehicleUpdate, VehicleCreate } from '../../../testservices';

interface UpdateResult {
  vehicleName: string;
  success: boolean;
  error?: string;
}

export const useVehicleUpdate = () => {
  const [api] = notification.useNotification();

  const updateSingleVehicle = useCallback(async (
    vehicle: VehicleRead,
    formState: VehicleUpdate
  ): Promise<UpdateResult> => {
    try {
      const updateData: VehicleUpdate = Object.fromEntries(
        Object.entries(formState).filter(([_, value]) => value !== null && value !== undefined)
      );

      await VehicleService.putVehicle(vehicle.token, updateData);
      return { vehicleName: vehicle.vehicle_name, success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      return { 
        vehicleName: vehicle.vehicle_name, 
        success: false, 
        error: errorMessage 
      };
    }
  }, []);

  const updateMultipleVehicles = useCallback(async (
    selectedVehicles: string[],
    vehicles: VehicleRead[],
    formState: VehicleUpdate,
    onSuccess?: () => void
  ) => {
    if (selectedVehicles.length === 0) {
      api.warning({
        message: "No Vehicles Selected",
        description: "Please select at least one vehicle to update.",
        duration: 5,
        placement: "bottomRight"
      });
      return;
    }

    const results: UpdateResult[] = [];

    for (const vehicleName of selectedVehicles) {
      const vehicle = vehicles.find((v: VehicleRead) => v.vehicle_name === vehicleName);
      if (!vehicle) {
        results.push({ 
          vehicleName, 
          success: false, 
          error: "Vehicle not found" 
        });
        continue;
      }

      const result = await updateSingleVehicle(vehicle, formState);
      results.push(result);
    }

    const successfulUpdates = results.filter((result) => result.success);
    const failedUpdates = results.filter((result) => !result.success);

    if (failedUpdates.length === 0) {
      api.success({
        message: "Update Successful",
        description: `All ${successfulUpdates.length} vehicles updated successfully!`,
        duration: 5,
        placement: "bottomRight"
      });
      onSuccess?.();
    } else {
      const failedNames = failedUpdates.map(r => r.vehicleName).join(", ");
      const errorDetails = failedUpdates
        .filter(r => r.error)
        .map(r => `${r.vehicleName}: ${r.error}`)
        .join("; ");
      
      api.error({
        message: "Update Partially Failed",
        description: `Failed to update: ${failedNames}. ${errorDetails}`,
        duration: 8,
        placement: "bottomRight"
      });
    }
  }, [api, updateSingleVehicle]);

  const addVehicle = useCallback(async(vehicle: VehicleCreate): Promise<UpdateResult> => {
    try{
      const result = await VehicleService.postVehicle(vehicle);
      return {vehicleName: result.vehicle_name, success: true, }
    }catch(err){
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      return { 
        vehicleName: vehicle.vehicle_name, 
        success: false, 
        error: errorMessage 
      };
    }
  }, [])

  return {
    updateSingleVehicle,
    updateMultipleVehicles,
  };
}; 