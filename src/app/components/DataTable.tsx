import { Table } from "antd";
import VehicleStatus from "./VehicleStatus";
import { useContext, useCallback, useMemo } from 'react'
import { TableDataItem, VehicleStatusType, DataTableProps, DeploymentStatusType } from '../types'
import { VehicleContext } from "./Provider/VehicleProvider";
import "../scss/components/DataTable.scss"
import ActionsButton from "./Content/ActionsButton";
import { VehicleRead} from "../../../testservices";
import DeploymentStatus from "./DeploymentStatus";
import { useFormatDate } from "../utils/useFormatDate";
import { calculateVehicleStatus } from "../utils/statusUtils";

export default function DataTable({ searchTerm, group, fleet, version, status }: DataTableProps) {
    
    const context = useContext(VehicleContext);
    const vehicles = context?.vehicles || [];
    const formatDate = useFormatDate();

    
    const columns = useMemo(() => [
        {
            title: "VehicleID",
            dataIndex: "vehicleID",
            key: "vehicleID"
        },
        {
            title: "Fleet Group",
            dataIndex: "group",
            key: "group"
        },
        {
            title: "Software Version",
            dataIndex: "softwarevers",
            key: "softwarevers",
            ellipsis: true,
        },
        {
            title: "Version Update",
            dataIndex: "status",
            key: "status",
            render: (status: VehicleStatusType) => <VehicleStatus status={status} />,
            width: 130
        },
        {
            title: "Last Modified By",
            dataIndex: "lastModifiedBy",
            key: "lastModifiedBy"
        },
        {
            title: "Last Modified Date",
            dataIndex: "lastModifiedDate",
            key: "lastModifiedDate"
        },
        {
            title: "Deployment Status",
            dataIndex: "deployment_status",
            key:"deploymentstatus",
            render: (deployment_status: DeploymentStatusType, record: TableDataItem) => {
                // Find the original vehicle data from the vehicles array
                const vehicle = vehicles.find((v: VehicleRead) => v.vehicle_name === record.vehicleID);
                return <DeploymentStatus value={deployment_status} vehicle={vehicle}/>;
            }
        },
        {
            title: "Actions",
            dataIndex: "vehicleID",
            key: "actions",
            render: (vehicleID: string) =>
                <ActionsButton vehicleID={vehicleID || "NA"} />
        },
    ], [])


    const normalizeString = useCallback((str: string): string => {
        return str
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    }, []);

    const getTableData = (): TableDataItem[] => {
        return vehicles.map((item: VehicleRead, index: number) => {
            return {
                key: index,
                status: calculateVehicleStatus(
                    item.assigned_bundle_name || "", 
                    item.installed_bundle_name || ""
                ),
                vehicleID: item.vehicle_name,
                group: item.assigned_group_name,
                softwarevers: item.assigned_bundle_name || "Not Assigned",
                calibrationvers: item.calibration_version,
                lastModifiedBy: "System",
                lastModifiedDate: formatDate(item.updated_at),
                deployment_status: item.deployment_status,
                Actions: item.vehicle_name,
            };
        })
        .filter((row: TableDataItem) => {
            const normalizedSearchTerm = normalizeString(searchTerm || "");

            const searchMatches = normalizedSearchTerm === "" || 
                normalizeString(row.vehicleID).includes(normalizedSearchTerm);
            
            const groupMatches = group === "" || 
                row.group === group || 
                (row.group && row.group === group.replace("-", " "));

            const versionMatches = version === "" || row.softwarevers === version;

            const statusMatches = status === "" || row.status === status;

            return searchMatches && groupMatches && versionMatches && statusMatches;
        });
    };



    return (
        <>
            <Table 
                dataSource={getTableData()} 
                className="data-table" 
                columns={columns}
                scroll={{x: '100%'}}
                pagination={{position: ["bottomCenter"]}}
            />
        </>
    );
}