import { VehicleService } from "../../../testservices"
import { useState, useEffect } from 'react'

export default function useInstalledBundle(token: string){
    const [installedBundle, setInstalledBundle] = useState<string>("");

    useEffect(() => {
         const fetchInstalledBundle = async() => {
        try{
            const result = await VehicleService.getVehicleInstalledBundle(token);
            const bundle = result.name;
            setInstalledBundle(bundle || "")
        }catch(err){
            throw err;
        }
    }

    fetchInstalledBundle();
    }, [token])

   

    return installedBundle;
}