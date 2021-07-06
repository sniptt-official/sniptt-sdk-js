/* tslint:disable */
/* eslint-disable */
/**
 * Sniptt API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AddSecretResponse
 */
export interface AddSecretResponse {
    /**
     * 
     * @type {string}
     * @memberof AddSecretResponse
     */
    SecretId: string;
}

export function AddSecretResponseFromJSON(json: any): AddSecretResponse {
    return AddSecretResponseFromJSONTyped(json, false);
}

export function AddSecretResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddSecretResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'SecretId': json['SecretId'],
    };
}

export function AddSecretResponseToJSON(value?: AddSecretResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'SecretId': value.SecretId,
    };
}


