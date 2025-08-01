/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LimitOffsetPage_GroupRead_ } from '../models/LimitOffsetPage_GroupRead_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GroupService {
    /**
     * Get Groups
     * Get all groups
     * @param token
     * @param name
     * @param createdAtGte
     * @param createdAtLte
     * @param limit Page size limit
     * @param offset Page offset
     * @returns LimitOffsetPage_GroupRead_ Successful Response
     * @throws ApiError
     */
    public static getGroups(
        token?: (string | null),
        name?: (string | null),
        createdAtGte?: (string | null),
        createdAtLte?: (string | null),
        limit: number = 50,
        offset?: number,
    ): CancelablePromise<LimitOffsetPage_GroupRead_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/group/',
            query: {
                'token': token,
                'name': name,
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
}
