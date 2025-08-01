/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StatusService {
    /**
     * Get Healthz
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getHealthz(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/status/healthz',
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
