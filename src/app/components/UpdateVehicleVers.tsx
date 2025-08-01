import { Button, Modal, notification } from "antd";
import { useContext, useMemo, useState, useEffect, useCallback } from 'react';
import { UpdateVehicleVersProps } from '../types';
import { VehicleContext } from "./Provider/VehicleProvider";
import '../scss/components/UpdateVehicleVersStyles.scss'
import { ArtifactCategory, ArtifactService } from "../../../testservices";
import { useVehicleForm } from '../utils/useVehicleForm';
import { useVehicleUpdate } from '../utils/useVehicleUpdate';
import { VehicleFormFields } from './shared/VehicleFormFields';
import { Select } from "antd";

interface CalibrationOption {
  value: string;
  label: React.ReactNode;
}

export default function UpdateVehicleVers({ vehicleName, isOpen, onClose }: UpdateVehicleVersProps) {
  const [api, contextHolder] = notification.useNotification();
  const context = useContext(VehicleContext);
  const vehicles = context?.vehicles || [];

  const currentVehicle = useMemo(() => {
    if (!vehicles || !vehicleName) return undefined;
    return vehicles.find((v) => v.vehicle_name === vehicleName);
  }, [vehicles, vehicleName]);

  const {
    formState,
    options,
    handleAssignedGroupChange,
    handleAssignedBundleChange,
    handleLaunchFlagsChange,
  } = useVehicleForm(isOpen, currentVehicle);

  
  const { updateSingleVehicle } = useVehicleUpdate();

  
  const [calibrationVersion, setCalibrationVersion] = useState<string>("");
  const [calibrationOptions, setCalibrationOptions] = useState<CalibrationOption[]>([]);
  
  const getAllArtifacts = useCallback(async () => {
    if (!currentVehicle) return [];

    try {
      const response = await ArtifactService.getArtifacts(
        undefined,
        'calibration',
        undefined,
        undefined,
        undefined,
        currentVehicle.vehicle_name,
        ArtifactCategory.PARAM,
        undefined,
        undefined,
        undefined,
        50,
        undefined,
      );

      return response.items || [];
    } catch (err) {
      console.error('Error fetching artifacts:', err);
      api.error({
        message: "Error Loading Calibration",
        description: "Failed to load calibration version options. Please try again.",
        placement: "bottomRight",
        duration: 5,
      });
      return [];
    }
  }, [currentVehicle, api]);

  const createCalibrationOption = useCallback((item: any): CalibrationOption => ({
    value: item.version,
    label: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {item.successor === "LATEST" && (
          <div 
            style={{
              width: '58px',
              height: '24px',
              backgroundColor: '#063017',
              color: 'white',
              borderRadius: '2px',
              textAlign: "center",
              fontSize: '14px',
            }}
          >
            LATEST
          </div>
        )}
        <span>{item.version}</span>
      </div>
    )
  }), []);

  
  useEffect(() => {
    if (!isOpen || !currentVehicle) return;

    const loadCalibrationOptions = async () => {
      try {
        const artifacts = await getAllArtifacts();
        const options = artifacts.map(createCalibrationOption);
        setCalibrationOptions(options);
      } catch (err) {
        console.error('Error loading calibration options:', err);
      }
    };

    loadCalibrationOptions();
  }, [isOpen, currentVehicle, getAllArtifacts, createCalibrationOption]);

  useEffect(() => {
    if (!isOpen) {
      setCalibrationVersion("");
    }
  }, [isOpen]);


  const handleSubmit = useCallback(async () => {
    if (!currentVehicle) {
      api.error({
        message: "Vehicle Not Found",
        description: "The selected vehicle could not be found.",
        placement: "bottomRight",
        duration: 5,
      });
      return;
    }

    try {
      const result = await updateSingleVehicle(currentVehicle, formState);
      
      if (result.success) {
        api.success({
          message: "Update Successful!",
          description: `Vehicle ${vehicleName} has been updated successfully.`,
          placement: "bottomRight",
          duration: 5,
        });
        onClose();
      }
    } catch (err) {
      console.error('Error updating vehicle:', err);
      api.error({
        message: "Update Failed",
        description: "Failed to update vehicle. Please try again.",
        placement: "bottomRight",
        duration: 5,
      });
    }
  }, [currentVehicle, formState, vehicleName, api, onClose, updateSingleVehicle]);

  return (
    <>
      {contextHolder}
      <Modal
        open={isOpen}
        onCancel={onClose}
        footer={null}
        closable={false}
      >
        <div className="wrapper">
          <h1 className="title">Update Version for {vehicleName}</h1>
          
          <VehicleFormFields
            formState={formState}
            options={options}
            onAssignedGroupChange={handleAssignedGroupChange}
            onAssignedBundleChange={handleAssignedBundleChange}
            onLaunchFlagsChange={handleLaunchFlagsChange}
          />
          
          <div id="option">
            <p style={{ color: "white" }}>Select Calibration Version</p>
            <Select
              placeholder="Select Calibration Version"
              style={{ width: "100%", backgroundColor: "#1C1C1C" }}
              onChange={setCalibrationVersion}
              options={calibrationOptions}
              value={calibrationVersion}
            />
          </div>
          
          <div className="buttons" style={{display: "flex", justifyContent: "flex-end", gap: "20px", width: "100%"}}>
            <Button 
              style={{ marginTop: "16px" }} 
              onClick={onClose}
            >
              Close
            </Button>
            <Button 
              type="primary" 
              onClick={handleSubmit} 
              style={{ marginTop: "16px" }}
            >
              Update Vehicle
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}