import { ReactNode } from "react";
import { VehicleRead, VehicleCreate, DeploymentStatus } from "../../testservices";
import { FormOptions } from "./utils/useVehicleForm";

// Use enum instead of string literals for better type safety
export enum VehicleStatus {
  Updated = "Updated",
  RestartRequired = "RestartRequired", 
  NotInstalled = "NotInstalled"
}

export type VehicleStatusType = VehicleStatus;

export type Group = "Production" | "Testing" | "Bring-Up";

// Use testservices type instead of custom interface
export type VehicleApiResponse = {
    items: VehicleRead[];
    total: number;
    limit: number;
    offset: number;
};

export interface TableDataItem {
    status: VehicleStatusType;
    key: number;
    vehicleID: string;
    group: string | null | undefined;
    softwarevers: string;
    calibrationvers: string | null | undefined;
    lastModifiedBy: string;
    lastModifiedDate: string | null | undefined;
    deployment_status: string;
    Actions: string;
}

export interface VehicleStatusProps {
    status: VehicleStatusType;
}

export interface FilterProps {
    value: string;
    onChange: (group: string) => void;
}

export interface DataTableProps {
    searchTerm: string;
    group: string;
    fleet: string;
    version: string;
    status: string;
}

export interface VehicleContextValue {
    vehicles: VehicleRead[] | undefined;
}

export interface VehicleProviderProps {
    children: ReactNode;
}

export interface UpdateVersionProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface UpdateVehicleVersProps {
    vehicleName: string | undefined; 
    isOpen: boolean;
    onClose: () => void;
}

export interface VersionCounts {
    version: string;
    count: number;
}

export interface SummaryMenuProps {
    vehicle?: VehicleRead;
    onClose?: () => void;
    style?: React.CSSProperties;
    onModalStateChange?: (isOpen: boolean) => void;
}

export interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export interface ActionsButtonProps {
    vehicleID: string;
}

export interface OverviewComponentProps {
    name: string;
    isActive: boolean;
    onClick: () => void;
}

export interface BundleOption {
    value: string;
    label: string;
}

export interface CalibrationOption {
    value: string;
    label: React.ReactNode;
}

export interface UpdateVehicleForm {
    group: string | undefined;
    softwareVersion: string | undefined;
    launchFlags: string[];
    calibrationVersion: string;
}

export interface UpdateAllVehiclesForm{
    group: string | undefined;
    softwareVersion: string | undefined;
    launchFlags: string[];
}

export interface InfocardProps{
    title: string,
    icon: string,
    mainData: string,
    subData: string[]
}

export interface AddVehicleModalProps{
    isOpen: boolean;
    onClose: () => void;
}

export interface VehicleCreateFormFieldsProps{
    formState: VehicleCreate;
    options: FormOptions;
    onVehicleNameChange: (value: string) => void;
    onAssignedGroupChange: (value: string) => void;
}

export interface FilterDropDownProps {
    type: 'fleet' | 'version' | 'status';
    value: string;
    onChange: (value: string) => void;
    options: Array<{value: string; label: string}>
}

export interface FleetData{
    fleet: string; 
    count: number;
}

export interface InfoCardProps{
    type: InfoCardType;
};

export type InfoCardType = 'total-vehicles' | 'active-deployment' | 'version-compliance' | 'action-required';

// Use testservices DeploymentStatus enum instead of custom type
export type DeploymentStatusType = DeploymentStatus;

export interface DeploymentStatusProps{
    value: DeploymentStatusType;
    onChange?: (value: DeploymentStatusType) => void;
    vehicle?: VehicleRead;
}