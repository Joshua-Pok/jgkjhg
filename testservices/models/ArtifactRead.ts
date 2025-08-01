/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactCategory } from './ArtifactCategory';
export type ArtifactRead = {
    created_at?: (string | null);
    updated_at?: (string | null);
    artifact_type: string;
    url: string;
    download_method: string;
    version: string;
    checksum: string;
    labels?: (Array<string> | null);
    association_target?: (string | null);
    token: string;
    successor: (string | null);
    artifact_category: (ArtifactCategory | null);
};

