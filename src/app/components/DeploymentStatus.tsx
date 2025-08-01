import { Select } from "antd";
import { useEffect, useState } from 'react';
import { DeploymentStatusType, DeploymentStatusProps } from "../types";
import { VehicleService, VehicleUpdate, DeploymentStatus as DeploymentStatusEnum } from "../../../testservices";
import { showSuccessNotification, showErrorNotification } from "../utils/notificationUtils";

export default function DeploymentStatus({
    value,
    onChange,
    vehicle,
}: DeploymentStatusProps){

    const [status, setStatus] = useState<DeploymentStatusType>(value);

    const handleChange = async (newValue: DeploymentStatusType) => {
        if (!vehicle) {
            setStatus(newValue);
            onChange?.(newValue);
            return;
        }

        try {
            const body: VehicleUpdate = {
                deployment_status: newValue as DeploymentStatusEnum,
            };
            
            await VehicleService.putVehicle(vehicle.token, body);
            
            setStatus(newValue);
            onChange?.(newValue);
            
            showSuccessNotification("Status Updated", `Vehicle deployment status updated to ${newValue}`);
        } catch (error) {
            console.error('Error updating deployment status:', error);
            // Revert to original value on error
            setStatus(value);
            
            showErrorNotification("Update Failed", "Failed to update deployment status. Please try again.");
        }
    };

    useEffect(() => {
        setStatus(value);
    }, [value]);

    const options = [
        {
            value: 'DEPLOYED' as const,
            label: (
                <div>
                    <div className="status-circle deployed"></div>
                    <span>Deployed</span>
                </div>
            )
        },
        {
            value: 'UNDEPLOYED' as const,
            label: <div>
                <div className="status-circle"></div>
                <span>Undeployed</span>
            </div> 
        },
    ];

    return (
        <>
            <Select
                value={status}
                onChange={handleChange}
                options={options}
                style={{width: "100%", minWidth: "120px"}}
            />
        </>
    )
}