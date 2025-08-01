/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthResponse } from '../models/AuthResponse';
import type { Body_token_v1_auth_token_post } from '../models/Body_token_v1_auth_token_post';
import type { Credential } from '../models/Credential';
import type { RefreshToken } from '../models/RefreshToken';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Token
     * needed for swagger authentication
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public static token(
        formData: Body_token_v1_auth_token_post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auth/token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Login
     * @param requestBody
     * @returns AuthResponse Successful Response
     * @throws ApiError
     */
    public static login(
        requestBody: Credential,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Logout
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static logout(
        requestBody: RefreshToken,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auth/logout',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Refresh
     * @param requestBody
     * @returns AuthResponse Successful Response
     * @throws ApiError
     */
    public static refresh(
        requestBody: RefreshToken,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auth/refresh',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Resource not found`,
                422: `Validation Error`,
            },
        });
    }
}
