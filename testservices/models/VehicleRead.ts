/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentStatus } from './DeploymentStatus';
export type VehicleRead = {
    created_at?: (string | null);
    updated_at?: (string | null);
    vehicle_name: string;
    launch_flags?: (string | null);
    assigned_bundle_name?: (string | null);
    assigned_group_name?: (string | null);
    calibration_version?: (string | null);
    installed_bundle_name?: (string | null);
    deployment_status: DeploymentStatus;
    token: string;
};

