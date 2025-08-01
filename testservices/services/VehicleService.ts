/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BundleName } from '../models/BundleName';
import type { BundleReadWithArtifact } from '../models/BundleReadWithArtifact';
import type { LimitOffsetPage_VehicleRead_ } from '../models/LimitOffsetPage_VehicleRead_';
import type { VehicleCreate } from '../models/VehicleCreate';
import type { VehicleRead } from '../models/VehicleRead';
import type { VehicleUpdate } from '../models/VehicleUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VehicleService {
    /**
     * Get Vehicles
     * Vehicle get all vehicles
     * @param token
     * @param vehicleName
     * @param vehicleNameIlike
     * @param vehicleNameIn
     * @param deploymentStatusIn
     * @param calibrationVersionIn
     * @param createdAtGte
     * @param createdAtLte
     * @param limit Page size limit
     * @param offset Page offset
     * @returns LimitOffsetPage_VehicleRead_ Successful Response
     * @throws ApiError
     */
    public static getVehicles(
        token?: (string | null),
        vehicleName?: (string | null),
        vehicleNameIlike?: (string | null),
        vehicleNameIn?: (string | null),
        deploymentStatusIn?: (string | null),
        calibrationVersionIn?: (string | null),
        createdAtGte?: (string | null),
        createdAtLte?: (string | null),
        limit: number = 50,
        offset?: number,
    ): CancelablePromise<LimitOffsetPage_VehicleRead_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/vehicle/',
            query: {
                'token': token,
                'vehicle_name': vehicleName,
                'vehicle_name__ilike': vehicleNameIlike,
                'vehicle_name__in': vehicleNameIn,
                'deployment_status__in': deploymentStatusIn,
                'calibration_version__in': calibrationVersionIn,
                'created_at__gte': createdAtGte,
                'created_at__lte': createdAtLte,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `Bad request`,
                401: `Not authorized`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Post Vehicle
     * Vehicle post new vehicle
     * @param requestBody
     * @returns VehicleRead Successful Response
     * @throws ApiError
     */
    public static postVehicle(
        requestBody: VehicleCreate,
    ): CancelablePromise<VehicleRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/vehicle/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Not authorized`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Vehicle By Name
     * @param name
     * @returns VehicleRead Successful Response
     * @throws ApiError
     */
    public static getVehicleByName(
        name: string,
    ): CancelablePromise<VehicleRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/vehicle/by_name',
            query: {
                'name': name,
            },
            errors: {
                400: `Bad request`,
                401: `Not authorized`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Put Vehicle
     * Vehicle update existing vehicle
     * @param vehicleToken
     * @param requestBody
     * @returns VehicleRead Successful Response
     * @throws ApiError
     */
    public static putVehicle(
        vehicleToken: string,
        requestBody: VehicleUpdate,
    ): CancelablePromise<VehicleRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/vehicle/{vehicle_token}',
            path: {
                'vehicle_token': vehicleToken,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Not authorized`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Vehicle Assigned Bundle
     * Vehicle get assigned bundle
     * @param vehicleToken
     * @returns BundleReadWithArtifact Successful Response
     * @throws ApiError
     */
    public static getVehicleAssignedBundle(
        vehicleToken: string,
    ): CancelablePromise<BundleReadWithArtifact> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/vehicle/{vehicle_token}/assigned_bundle',
            path: {
                'vehicle_token': vehicleToken,
            },
            errors: {
                400: `Bad request`,
                401: `Not authorized`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Vehicle Installed Bundle
     * Vehicle get installed bundle
     * @param vehicleToken
     * @returns BundleReadWithArtifact Successful Response
     * @throws ApiError
     */
    public static getVehicleInstalledBundle(
        vehicleToken: string,
    ): CancelablePromise<BundleReadWithArtifact> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/vehicle/{vehicle_token}/installed_bundle',
            path: {
                'vehicle_token': vehicleToken,
            },
            errors: {
                400: `Bad request`,
                401: `Not authorized`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Assign Bundle
     * Patch vehicle assign bundle
     * @param vehicleToken
     * @param requestBody
     * @returns VehicleRead Successful Response
     * @throws ApiError
     */
    public static patchAssignBundle(
        vehicleToken: string,
        requestBody: BundleName,
    ): CancelablePromise<VehicleRead> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/vehicle/{vehicle_token}/assign_bundle',
            path: {
                'vehicle_token': vehicleToken,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Not authorized`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Install Bundle
     * Patch vehicle install bundle
     * @param vehicleToken
     * @param requestBody
     * @returns VehicleRead Successful Response
     * @throws ApiError
     */
    public static patchInstallBundle(
        vehicleToken: string,
        requestBody: BundleName,
    ): CancelablePromise<VehicleRead> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/vehicle/{vehicle_token}/install_bundle',
            path: {
                'vehicle_token': vehicleToken,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Not authorized`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Revert
     * Patch vehicle install bundle
     * @param vehicleToken
     * @returns any Successful Response
     * @throws ApiError
     */
    public static revert(
        vehicleToken: string,
    ): CancelablePromise<(VehicleRead | null)> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/vehicle/{vehicle_token}/revert',
            path: {
                'vehicle_token': vehicleToken,
            },
            errors: {
                400: `Bad request`,
                401: `Not authorized`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
}
