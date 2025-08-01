/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactRead } from './ArtifactRead';
import type { BundleType } from './BundleType';
export type BundleReadWithArtifact = {
    created_at?: (string | null);
    updated_at?: (string | null);
    name: string;
    association_target?: (string | null);
    token: string;
    bundle_type: (BundleType | null);
    artifacts?: (Array<ArtifactRead> | null);
};

