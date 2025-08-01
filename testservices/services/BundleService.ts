/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactList } from '../models/ArtifactList';
import type { BundleCreate } from '../models/BundleCreate';
import type { BundleRead } from '../models/BundleRead';
import type { BundleType } from '../models/BundleType';
import type { BundleUpdate } from '../models/BundleUpdate';
import type { LimitOffsetPage_BundleRead_ } from '../models/LimitOffsetPage_BundleRead_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BundleService {
    /**
     * Get Bundles
     * Bundle get all bundles
     * @param token
     * @param name
     * @param nameIlike
     * @param bundleType
     * @param associationTarget
     * @param createdAtGte
     * @param createdAtLte
     * @param limit Page size limit
     * @param offset Page offset
     * @returns LimitOffsetPage_BundleRead_ Successful Response
     * @throws ApiError
     */
    public static getBundles(
        token?: (string | null),
        name?: (string | null),
        nameIlike?: (string | null),
        bundleType?: (BundleType | null),
        associationTarget?: (string | null),
        createdAtGte?: (string | null),
        createdAtLte?: (string | null),
        limit: number = 50,
        offset?: number,
    ): CancelablePromise<LimitOffsetPage_BundleRead_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/bundle/',
            query: {
                'token': token,
                'name': name,
                'name__ilike': nameIlike,
                'bundle_type': bundleType,
                'association_target': associationTarget,
                'created_at__gte': createdAtGte,
                'created_at__lte': createdAtLte,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `Bad request`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Post Bundle
     * Bundle post new bundle
     * @param requestBody
     * @returns BundleRead Successful Response
     * @throws ApiError
     */
    public static postBundle(
        requestBody: BundleCreate,
    ): CancelablePromise<BundleRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/bundle/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Bundle By Name
     * @param name
     * @returns BundleRead Successful Response
     * @throws ApiError
     */
    public static getBundleByName(
        name: string,
    ): CancelablePromise<BundleRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/bundle/by_name',
            query: {
                'name': name,
            },
            errors: {
                400: `Bad request`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Put Bundle
     * Bundle update existing bundle
     * @param bundleToken
     * @param requestBody
     * @returns BundleRead Successful Response
     * @throws ApiError
     */
    public static putBundle(
        bundleToken: string,
        requestBody: BundleUpdate,
    ): CancelablePromise<BundleRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/bundle/{bundle_token}',
            path: {
                'bundle_token': bundleToken,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Bundle
     * Bundle delete existing bundle
     * @param bundleToken
     * @returns void
     * @throws ApiError
     */
    public static deleteBundle(
        bundleToken: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/bundle/{bundle_token}',
            path: {
                'bundle_token': bundleToken,
            },
            errors: {
                400: `Bad request`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Bundle Artifacts
     * Bundle get bundle artifacts
     * @param bundleToken
     * @returns ArtifactList Successful Response
     * @throws ApiError
     */
    public static getBundleArtifacts(
        bundleToken: string,
    ): CancelablePromise<ArtifactList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/bundle/{bundle_token}/artifacts',
            path: {
                'bundle_token': bundleToken,
            },
            errors: {
                400: `Bad request`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Vehicle Assignable Bundle
     * Get vehicle assignable bundle
     * @param vehicleToken
     * @param limit Page size limit
     * @param offset Page offset
     * @returns LimitOffsetPage_BundleRead_ Successful Response
     * @throws ApiError
     */
    public static getVehicleAssignableBundle(
        vehicleToken: string,
        limit: number = 50,
        offset?: number,
    ): CancelablePromise<LimitOffsetPage_BundleRead_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/bundle{vehicle_token}/assignable_bundle',
            path: {
                'vehicle_token': vehicleToken,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `Bad request`,
                403: `Bad request`,
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
}
