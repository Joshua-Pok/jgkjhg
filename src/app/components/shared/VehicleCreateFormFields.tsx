import { Input, Select } from "antd"
import { VehicleCreateFormFieldsProps } from "@/app/types";

export default function VehicleCreateFormFields({
    formState,
    options,
    onVehicleNameChange,
    onAssignedGroupChange
}: VehicleCreateFormFieldsProps){
    
    
    return (
        <>
        <div id="option">
            <p>Vehicle ID</p>
            <Input
            placeholder=""
            style={{width: "100%", backgroundColor: "#1C1C1C", color: "#FFFFFF"}}
            onChange={(e) => onVehicleNameChange(e.target.value)}
            value={formState.vehicle_name}
            />
        </div>

        <div id="option">
            <p>Fleet Group</p>
            <Select
            placeholder="Select Fleet Group"
            style = {{width: "100%", color: "white", backgroundColor: "1C1C1C"}}
            onChange = {onAssignedGroupChange}
            options = {options.groupOptions}
            value = {formState.assigned_group_name}
            />
        </div>


        </>
    );
}