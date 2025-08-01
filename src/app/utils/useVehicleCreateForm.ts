import { notification } from "antd"
import { useState, useCallback, useEffect } from "react";
import { GroupService, VehicleCreate } from "../../../testservices";
import { FormOptions } from "./useVehicleForm";
import { VehicleService } from "../../../testservices";
import { getAllGroups } from "./getAllGroups";


export const useVehicleCreateForm = (isOpen: boolean) => {
    const [api] = notification.useNotification();

    const [formState, setFormState] = useState<VehicleCreate>({
        vehicle_name: "",
        launch_flags: null,
        assigned_bundle_name: null,
        assigned_group_name: null,
    });

    const [options, setOptions] = useState<FormOptions>({
        groupOptions: [],
        softwareOptions: [],
        launchFlagOptions: [],
    });

    const updateFormState = useCallback((updates: Partial<VehicleCreate>) => [
        setFormState(prev => ({...prev, ...updates}))
    ], []);

    // const getAllBundles = useCallback(async () => {
    //     try{
    //         const response = await BundleService.getBundles()
    //         return response.items || [];
    //     }catch(err){
    //         api.error({
    //             message: "Error loading bundle options",
    //             description: "Failed to load software versions",
    //             placement: "bottomRight",
    //             duration: 5,
    //         })
    //     };
    // }, [])

    // const getAllGroups = useCallback(async () => {
    //         try{
    //             const response = await GroupService.getGroups();
    //             return response.items || [];
    //         }catch(err){
    //             api.error({
    //                 message: "Error loading group options",
    //                 description: "Failed to load group options",
    //                 placement: "bottomRight",
    //                 duration: 5,
    //             })                
    //         }
    //     }, [api]);

        const createVehicle = useCallback(async(vehicleData: VehicleCreate) => {
            try{
                const response = await VehicleService.postVehicle(vehicleData)
                return { success: true, data: response };
            }catch(err){
                console.error('Error creating vehicle', err);
                return { success: false, error: err };
            }
        }, []);

        useEffect(() => {
            if(!isOpen) return;

            const loadGroupOptions = async() => {
                try{
                    const groups = await getAllGroups();
                    const groupOptions = groups!.map((item) => ({
                        value: item.name,
                        label: item.name

                    }));

                    setOptions(prev => ({...prev, groupOptions}));
                }catch(err){
                    console.error("error loading group options: ", err)
                }
            }

            loadGroupOptions();
        }, [isOpen,getAllGroups]);


        useEffect(() => {
            if(isOpen!){
                setFormState({
                    vehicle_name: "",
                    launch_flags: null,
                    assigned_bundle_name: null,
                    assigned_group_name: null,
                });
            }
        }, [isOpen]);

        const handleVehicleNameChange = useCallback((value: string) => {
            updateFormState({vehicle_name: value});
        }, [updateFormState]);

        const handleAssignedGroupChange = useCallback((value: string) => {
            updateFormState({assigned_group_name: value});

        }, [updateFormState]);

        return {
            formState, 
            options, 
            handleVehicleNameChange,
            handleAssignedGroupChange,
            createVehicle,
            updateFormState
        }
}