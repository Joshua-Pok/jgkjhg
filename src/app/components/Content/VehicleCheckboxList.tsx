import React from 'react';
import { memo } from 'react';
import { Checkbox } from 'antd';
import { VehicleRead } from '../../../../testservices';

interface VehicleCheckboxListProps {
  vehicles: VehicleRead[];
  selectedVehicles: string[];
  onSelect: (vehicleName: string, checked: boolean) => void;
}

const VehicleCheckboxList: React.FC<VehicleCheckboxListProps> = ({ vehicles, selectedVehicles, onSelect }) => (
  <>
    {vehicles.map((vehicle) => (
      <Checkbox
        style={{ color: 'white' }}
        onChange={(e) => onSelect(vehicle.vehicle_name, e.target.checked)}
        checked={selectedVehicles.includes(vehicle.vehicle_name)}
        key={vehicle.vehicle_name}
      >
        {vehicle.vehicle_name}
      </Checkbox>
    ))}
  </>
);

export default memo(VehicleCheckboxList); 