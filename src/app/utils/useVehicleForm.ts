import { notification } from "antd"
import { useCallback, useMemo, useState, useEffect } from "react";
import { BundleService, GroupService, VehicleRead, VehicleUpdate } from "../../../testservices";


export interface FormOptions {
  groupOptions: Array<{ value: string; label: string }>;
  softwareOptions: Array<{ value: string; label: string }>;
  launchFlagOptions: Array<{ value: string; label: string }>;
}


export const useVehicleForm = (isOpen: boolean, vehicle?: VehicleRead) => {
    const [api] = notification.useNotification();

    const [formState, setFormState] = useState<VehicleUpdate>({
        vehicle_name: null,
        launch_flags: null,
        assigned_bundle_name: null,
        installed_bundle_name: null,
        assigned_group_name: null,
    });

    const [options, setOptions] = useState<FormOptions>({
        groupOptions: [],
        softwareOptions: [],
        launchFlagOptions: []
    })

    
      
      const getLaunchFlags = useMemo(() => {
        if(vehicle?.launch_flags){
          return vehicle.launch_flags.split(" ");
        }else{
          return []
        }
        
      }, [vehicle]);

    const updateFormState = useCallback((updates: Partial<VehicleUpdate>) => {
        setFormState(prev => ({ ... prev, ...updates}));
    }, []);

    const getAllBundles = useCallback(async () => {
        try{
            const response = await BundleService.getBundles()
            return response.items || [];
        }catch(err){
            console.error('error fetching bundles: ', err);
            api.error({
                 message: "Error Loading Bundles",
                description: "Failed to load software version options. Please try again.",
                placement: "bottomRight",
                duration: 5,
            });
            return [];
        }
    }, [api]);

    const getAllGroups = useCallback(async () => {
        try{
            const response = await GroupService.getGroups();
            return response.items || [];
        }catch(err){
            console.error('Error fetching groups: ', err);
             api.error({
            message: "Error Loading Groups",
            description: "Failed to load group options. Please try again.",
            placement: "bottomRight",
            duration: 5,
      });
      return [];
        }
    }, [api])

    useEffect(() => {
        if(!isOpen) return;

        const loadGroupOptions = async() => {
            try{
                const groups = await getAllGroups();
                const groupOptions = groups.map((item) => ({
                    value: item.name,
                    label: item.name,
                }));
                setOptions(prev => ({ ...prev, groupOptions}));

            }catch(err){
                console.error("Error loading group options: ", err);
            }
        }

        loadGroupOptions();
    }, [isOpen, getAllGroups]);

    useEffect(() => {
        if(!isOpen) return;

        const loadBundleOptions = async () => {
      try {
        const bundles = await getAllBundles();
        const softwareOptions = bundles.map((item) => ({
          value: item.name,
          label: item.name,
        }));
        setOptions(prev => ({ ...prev, softwareOptions }));
      } catch (err) {
        console.error('Error loading bundle options:', err);
      }
    };

    loadBundleOptions();

    }, [isOpen, getAllBundles]);

    useEffect(() => {
    if (!isOpen) {
      setFormState({
        vehicle_name: null,
        launch_flags: null,
        assigned_bundle_name: null,
        installed_bundle_name: null,
        assigned_group_name: null,
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if(!isOpen) return;

    const loadLaunchFlagOptions = () => {
        const flags = getLaunchFlags;
        const launchFlagOptions = flags.map((item) => ({
            value: item,
            label: item,
        }));
        setOptions(prev => ({...prev, launchFlagOptions}))
    };
    loadLaunchFlagOptions();
  }, [isOpen, getLaunchFlags])

  
  const handleVehicleNameChange = useCallback((value: string) => {
    updateFormState({ vehicle_name: value });
  }, [updateFormState]);

  const handleAssignedGroupChange = useCallback((value: string) => {
    updateFormState({ assigned_group_name: value });
  }, [updateFormState]);

  const handleAssignedBundleChange = useCallback((value: string) => {
    updateFormState({ assigned_bundle_name: value });
  }, [updateFormState]);

  const handleInstalledBundleChange = useCallback((value: string) => {
    updateFormState({ installed_bundle_name: value });
  }, [updateFormState]);

  const handleLaunchFlagsChange = useCallback((values: string[]) => {
    updateFormState({ launch_flags: values.join(' ') });
  }, [updateFormState]);

  return {
    formState,
    options,
    handleVehicleNameChange,
    handleAssignedGroupChange,
    handleAssignedBundleChange,
    handleInstalledBundleChange,
    handleLaunchFlagsChange,
    updateFormState,
  };



};