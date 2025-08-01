import {createContext, useState, useEffect, useCallback } from 'react'
import {VehicleContextValue, VehicleProviderProps} from '../../types'
import { useInterval } from '@/app/utils/useInterval';
import { VehicleRead, VehicleService } from '../../../../testservices';

export const VehicleContext = createContext<VehicleContextValue | undefined>(undefined);

export default function VehicleProvider({children}: VehicleProviderProps){

    
    const [vehicles, setVehicles] = useState<VehicleRead[]>([]);

    const fetchAllVehicles = useCallback(async() => {
        try{
            const response = await VehicleService.getVehicles();
            // Filter out archived vehicles at the provider level
            const activeVehicles = response.items.filter(vehicle => vehicle.deployment_status !== "ARCHIVED");
            setVehicles(activeVehicles)
        }catch(err){
            console.log(err);
        }
    }, []);

    useEffect(() => {
        fetchAllVehicles();
    }, []);

    useInterval(() => {
        fetchAllVehicles()
    }, 10000);



    return (
        
        <VehicleContext.Provider value={{vehicles}}>
            {children}
        </VehicleContext.Provider>
    
    )
};