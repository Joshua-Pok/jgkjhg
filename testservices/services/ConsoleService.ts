/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BundleName } from '../models/BundleName';
import type { BundleReadWithArtifact } from '../models/BundleReadWithArtifact';
import type { ConsoleCreate } from '../models/ConsoleCreate';
import type { ConsoleRead } from '../models/ConsoleRead';
import type { ConsoleUpdate } from '../models/ConsoleUpdate';
import type { LimitOffsetPage_ConsoleRead_ } from '../models/LimitOffsetPage_ConsoleRead_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ConsoleService {
    /**
     * Get Consoles
     * Console get all consoles
     * @param token
     * @param consoleName
     * @param consoleNameIn
     * @param createdAtGte
     * @param createdAtLte
     * @param limit Page size limit
     * @param offset Page offset
     * @returns LimitOffsetPage_ConsoleRead_ Successful Response
     * @throws ApiError
     */
    public static getConsoles(
        token?: (string | null),
        consoleName?: (string | null),
        consoleNameIn?: (string | null),
        createdAtGte?: (string | null),
        createdAtLte?: (string | null),
        limit: number = 50,
        offset?: number,
    ): CancelablePromise<LimitOffsetPage_ConsoleRead_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/console/',
            query: {
                'token': token,
                'Console_name': consoleName,
                'Console_name__in': consoleNameIn,
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
     * Post Console
     * Console post new console
     * @param requestBody
     * @returns ConsoleRead Successful Response
     * @throws ApiError
     */
    public static postConsole(
        requestBody: ConsoleCreate,
    ): CancelablePromise<ConsoleRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/console/',
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
     * Get Console By Name
     * @param name
     * @returns ConsoleRead Successful Response
     * @throws ApiError
     */
    public static getConsoleByName(
        name: string,
    ): CancelablePromise<ConsoleRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/console/by_name',
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
     * Put Console
     * Console update existing console
     * @param consoleToken
     * @param requestBody
     * @returns ConsoleRead Successful Response
     * @throws ApiError
     */
    public static putConsole(
        consoleToken: string,
        requestBody: ConsoleUpdate,
    ): CancelablePromise<ConsoleRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/console/{console_token}',
            path: {
                'console_token': consoleToken,
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
     * Get Console Assigned Bundle
     * Console get assigned bundle
     * @param consoleToken
     * @returns BundleReadWithArtifact Successful Response
     * @throws ApiError
     */
    public static getConsoleAssignedBundle(
        consoleToken: string,
    ): CancelablePromise<BundleReadWithArtifact> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/console/{console_token}/assigned_bundle',
            path: {
                'console_token': consoleToken,
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
     * Get Console Installed Bundle
     * Console get installed bundle
     * @param consoleToken
     * @returns BundleReadWithArtifact Successful Response
     * @throws ApiError
     */
    public static getConsoleInstalledBundle(
        consoleToken: string,
    ): CancelablePromise<BundleReadWithArtifact> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/console/{console_token}/installed_bundle',
            path: {
                'console_token': consoleToken,
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
     * Patch Console Assign Bundle
     * Patch console assign bundle
     * @param consoleToken
     * @param requestBody
     * @returns ConsoleRead Successful Response
     * @throws ApiError
     */
    public static patchConsoleAssignBundle(
        consoleToken: string,
        requestBody: BundleName,
    ): CancelablePromise<ConsoleRead> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/console/{console_token}/assign_bundle',
            path: {
                'console_token': consoleToken,
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
     * Patch Console Install Bundle
     * Patch console install bundle
     * @param consoleToken
     * @param requestBody
     * @returns ConsoleRead Successful Response
     * @throws ApiError
     */
    public static patchConsoleInstallBundle(
        consoleToken: string,
        requestBody: BundleName,
    ): CancelablePromise<ConsoleRead> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/console/{console_token}/install_bundle',
            path: {
                'console_token': consoleToken,
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
}
