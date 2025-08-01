import "../scss/components/UpdateVersion.scss"
import { notification, Tabs, Button, Modal } from "antd"
import { useState, useContext, useMemo, useCallback } from "react";
import { UpdateVersionProps } from "../types";
import { VehicleContext } from "./Provider/VehicleProvider";
import VehicleCheckboxList from './Content/VehicleCheckboxList';
import { useVehicleForm } from '../utils/useVehicleForm';
import { useVehicleUpdate } from '../utils/useVehicleUpdate';
import { VehicleFormFields } from './shared/VehicleFormFields';

export default function UpdateVersion({isOpen, onClose}: UpdateVersionProps) {
    const [api, contextHolder] = notification.useNotification();
    const context = useContext(VehicleContext);
    const vehicles = context?.vehicles || [];

    const [selectedVehicles, setSelectedVehicles] = useState<string[]>([]);

    const {
        formState,
        options,
        handleAssignedGroupChange,
        handleAssignedBundleChange,
        handleLaunchFlagsChange,
    } = useVehicleForm(isOpen);

    
    const { updateMultipleVehicles } = useVehicleUpdate();

    
    const tabItems = useMemo(() => [
        {
            key: "1",
            label: "Select All"
        },
        {
            key: "2",
            label: "Clear All"
        }
    ], []);

    
    const allVehicleNames = useMemo(() => 
        vehicles.map((vehicle) => vehicle.vehicle_name), 
        [vehicles]
    );

    const handleSelect = useCallback((vehicleName: string, checked: boolean) => {
        if(checked){
            setSelectedVehicles(prev => [...prev, vehicleName]);
        }else{
            setSelectedVehicles(prev => prev.filter(name => name !== vehicleName));
        }
    }, []);

    const handleTabChange = useCallback((key: string) => {
        if(key === "1"){
            setSelectedVehicles([...allVehicleNames]);
        }else if(key === "2"){
            setSelectedVehicles([]);
        }
    }, [allVehicleNames]);

    const handleSubmit = useCallback(async () => {
        try{
            await updateMultipleVehicles(selectedVehicles, vehicles, formState, onClose);
            api.success({
                message: "All Vehicles Updated",
                description: "All vehicles updated successfully",
                placement: "bottomRight",
                duration: 5,
            })
        }catch(err){
            api.error({
                message: "Failed",
                description: "Something went wrong",
                placement: "bottomRight",
                duration: 5,
            })
        }
        
    }, [selectedVehicles, vehicles, formState, onClose, updateMultipleVehicles]);

    const handleCancel = useCallback(() => {
        onClose();
        setSelectedVehicles([]);
    }, [onClose]);

    return(
        <>
        {contextHolder}
        <Modal
        open={isOpen}
        onCancel={handleCancel}
        footer = {null}
        className="modal"
        closable={false}
        >
        <div className="wrapper">
            <h2 id="title">Update Version...</h2>
            
            
            <VehicleFormFields
                formState={formState}
                options={options}
                onAssignedGroupChange={handleAssignedGroupChange}
                onAssignedBundleChange={handleAssignedBundleChange}
                onLaunchFlagsChange={handleLaunchFlagsChange}
            />

            <div id="select-vehicles">
                <div id="title-filter">
                    <p>Select Vehicles ({selectedVehicles.length} selected)</p>
                    <Tabs items={tabItems} onChange={handleTabChange}></Tabs>
                </div>
            </div>
            <div id="checkboxes">
                   <VehicleCheckboxList
                   vehicles = {vehicles}
                   selectedVehicles={selectedVehicles}
                   onSelect={handleSelect}
                   ></VehicleCheckboxList>
            </div>
            <div id="buttons">
                <Button type="dashed" onClick={handleCancel}>Cancel</Button>
                <Button type="primary" onClick={handleSubmit}>Update</Button>
            </div>
        </div>
        </Modal>
        </>
    )
}