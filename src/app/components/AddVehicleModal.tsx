import { AddVehicleModalProps } from "../types";
import { useVehicleCreateForm } from "../utils/useVehicleCreateForm";
import { useCallback } from "react";
import VehicleCreateFormFields from './shared/VehicleCreateFormFields';
import { BaseModal } from './shared/BaseModal';
import { showSuccessNotification, showErrorNotification } from '../utils/notificationUtils';

export default function AddVehicleModal({isOpen, onClose}: AddVehicleModalProps){
    const {
        formState,
        options,
        handleVehicleNameChange,
        handleAssignedGroupChange,
        createVehicle
    } = useVehicleCreateForm(isOpen);

    const handleSubmit = useCallback(async () => {
        if(formState.vehicle_name.trim() === ""){
            showErrorNotification("Missing Fields!", "Vehicle Name is required");
            return;
        }

        try{
            const result = await createVehicle(formState);

            if(result.success){
                showSuccessNotification("Vehicle successfully created!", "Vehicle has been created", 5);
            }

            onClose();
        }catch(err){
            showErrorNotification("Something went wrong", "vehicle was NOT created");
        }
    }, [formState, createVehicle, onClose]);

    return(
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            title="Add new Vehicle"
            submitText="Add Vehicle"
            onSubmit={handleSubmit}
        >
            <VehicleCreateFormFields
                formState={formState}
                options={options}
                onVehicleNameChange={handleVehicleNameChange}
                onAssignedGroupChange={handleAssignedGroupChange}
            />
        </BaseModal>
    );
}