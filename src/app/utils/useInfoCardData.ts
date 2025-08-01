import { useContext, useMemo } from "react"
import { VehicleContext } from "../components/Provider/VehicleProvider"
import { useGroupCount } from "./useGroupCount";
import useStatusCount from './useStatusCount'
export const useInfoCardData = () => {
    const context = useContext(VehicleContext);
    const vehicles = context?.vehicles || [];


    const groupCountResult = useGroupCount(vehicles);
    const statusCounts = useStatusCount(vehicles);


    const totalVehiclesData = useMemo(() => {
        return{
            title: "Total Vehicles",
            mainData: vehicles.length,
            subData: groupCountResult,
        }
    }, [vehicles, groupCountResult]);

    const versionComplianceData = useMemo(() => {
        const updatedCount = statusCounts.Updated || 0;
        const percentage = vehicles.length > 0 ? Math.floor((updatedCount / vehicles.length) * 100) : 0;
        return{
            title: "Version Compliance",
            mainData: `${percentage}%`,
            subData: [`${updatedCount} of ${vehicles.length} updated`]
        }
    }, [vehicles, statusCounts])

    const activeDeploymentsData = useMemo(() => {
       const active = vehicles.filter((vehicle: any) => {
            return vehicle.deployment_status === "DEPLOYED"
        });

        const percentage = vehicles.length > 0 ? (active.length / vehicles.length) * 100 : 0;
        return{
            title: "Active Deployment",
            mainData: `${Math.floor(percentage)}%`,
            subData: `${active.length} deployed, ${vehicles.length - active.length} undeployed`
        }
    }, [vehicles]);

    const actionRequiredData = useMemo(() => {
        const restartRequired = statusCounts.RestartRequired || 0;
        const notInstalled = statusCounts.NotInstalled || 0;
        const number = restartRequired + notInstalled;

        return {
            title: "Action Required",
            mainData: `${number}`,
            subData: `${restartRequired} restart required, ${notInstalled} not installed`
        }
    }, [vehicles, statusCounts]);

    return {
        totalVehiclesData,
        versionComplianceData,
        actionRequiredData,
        activeDeploymentsData
    }
}
