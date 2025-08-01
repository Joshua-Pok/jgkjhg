import { useContext, useEffect, useMemo, useState } from "react";
import { getAllGroups } from "./getAllGroups";
import { VehicleContext } from "../components/Provider/VehicleProvider";
export const useFilterOptions = () => {

    const context = useContext(VehicleContext);
    const vehicles = context?.vehicles || [];
    const [fleetOptions, setFleetOptions] = useState<{value: string, label: string}[]>([])
    
    useEffect(() => {
       const loadFleetOptions = async() => {
        try{
            const groups = await getAllGroups();
            const options = groups.map((group) => ({
                value: group.name,
                label: group.name
            }));
            setFleetOptions(options)
        }catch(err){
            throw err;
        }
       }

       loadFleetOptions()
    }, [])

    const versionOptions = useMemo(() => {
        const versions = new Set<string>();

        vehicles.forEach(vehicle => {
            if(vehicle.assigned_bundle_name){
                versions.add(vehicle.assigned_bundle_name);
            }
        });

        return [
            {value: '', label: 'All Versions'},
            ...Array.from(versions).map(version => ({
                value: version,
                label: version
            }))
        ];
    }, [vehicles]);

    const statusOptions = [
        {value: '', label: 'All Status'},
        {value: 'Updated', label: 'Updated'},
        {value: 'RestartRequired', label: 'Restart Required'},
        {value: 'NotInstalled', label: 'Not Installed'}
    ];

    return{
        fleetOptions,
        versionOptions,
        statusOptions
    }
}