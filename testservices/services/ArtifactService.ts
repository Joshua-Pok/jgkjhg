/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactCategory } from '../models/ArtifactCategory';
import type { ArtifactCreate } from '../models/ArtifactCreate';
import type { ArtifactRead } from '../models/ArtifactRead';
import type { ArtifactUpdate } from '../models/ArtifactUpdate';
import type { LimitOffsetPage_ArtifactRead_ } from '../models/LimitOffsetPage_ArtifactRead_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ArtifactService {
    /**
     * Get Artifacts
     * Artifact get all artifacts
     * @param token
     * @param artifactType
     * @param artifactTypeIlike
     * @param version
     * @param versionIlike
     * @param associationTarget
     * @param artifactCategory
     * @param successor
     * @param createdAtGte
     * @param createdAtLte
     * @param limit Page size limit
     * @param offset Page offset
     * @returns LimitOffsetPage_ArtifactRead_ Successful Response
     * @throws ApiError
     */
    public static getArtifacts(
        token?: (string | null),
        artifactType?: (string | null),
        artifactTypeIlike?: (string | null),
        version?: (string | null),
        versionIlike?: (string | null),
        associationTarget?: (string | null),
        artifactCategory?: (ArtifactCategory | null),
        successor?: (string | null),
        createdAtGte?: (string | null),
        createdAtLte?: (string | null),
        limit: number = 50,
        offset?: number,
    ): CancelablePromise<LimitOffsetPage_ArtifactRead_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/artifact/',
            query: {
                'token': token,
                'artifact_type': artifactType,
                'artifact_type__ilike': artifactTypeIlike,
                'version': version,
                'version__ilike': versionIlike,
                'association_target': associationTarget,
                'artifact_category': artifactCategory,
                'successor': successor,
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
     * Post Artifact
     * Artifact post new artifact
     * @param requestBody
     * @returns ArtifactRead Successful Response
     * @throws ApiError
     */
    public static postArtifact(
        requestBody: ArtifactCreate,
    ): CancelablePromise<ArtifactRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/artifact/',
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
     * Get Artifact By Type And Version
     * @param artifactType
     * @param version
     * @returns ArtifactRead Successful Response
     * @throws ApiError
     */
    public static getArtifactByTypeAndVersion(
        artifactType: string,
        version: string,
    ): CancelablePromise<ArtifactRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/artifact/by_type_and_version',
            query: {
                'artifact_type': artifactType,
                'version': version,
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
     * Put Artifact
     * Artifact update existing artifact
     * @param artifactToken
     * @param requestBody
     * @returns ArtifactRead Successful Response
     * @throws ApiError
     */
    public static putArtifact(
        artifactToken: string,
        requestBody: ArtifactUpdate,
    ): CancelablePromise<ArtifactRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/artifact/{artifact_token}',
            path: {
                'artifact_token': artifactToken,
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
     * Delete Artifact
     * Artifact delete existing artifact
     * @param artifactToken
     * @returns void
     * @throws ApiError
     */
    public static deleteArtifact(
        artifactToken: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/artifact/{artifact_token}',
            path: {
                'artifact_token': artifactToken,
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
     * Set Artifact As Latest
     * Artifact update existing artifact as latest
     * @param artifactToken
     * @returns ArtifactRead Successful Response
     * @throws ApiError
     */
    public static setArtifactAsLatest(
        artifactToken: string,
    ): CancelablePromise<ArtifactRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/artifact/{artifact_token}/set_param_artifact_as_latest',
            path: {
                'artifact_token': artifactToken,
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
