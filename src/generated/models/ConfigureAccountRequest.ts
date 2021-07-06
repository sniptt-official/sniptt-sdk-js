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
 * @interface ConfigureAccountRequest
 */
export interface ConfigureAccountRequest {
    /**
     * 
     * @type {string}
     * @memberof ConfigureAccountRequest
     */
    PersonalVaultEncryptedPrivateKey: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigureAccountRequest
     */
    PersonalVaultPublicKey: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigureAccountRequest
     */
    AccountPublicKey: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigureAccountRequest
     */
    AccountName: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigureAccountRequest
     */
    AccountEncryptionKeySalt: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigureAccountRequest
     */
    AccountEncryptedPrivateKey: string;
}

export function ConfigureAccountRequestFromJSON(json: any): ConfigureAccountRequest {
    return ConfigureAccountRequestFromJSONTyped(json, false);
}

export function ConfigureAccountRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigureAccountRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'PersonalVaultEncryptedPrivateKey': json['PersonalVaultEncryptedPrivateKey'],
        'PersonalVaultPublicKey': json['PersonalVaultPublicKey'],
        'AccountPublicKey': json['AccountPublicKey'],
        'AccountName': json['AccountName'],
        'AccountEncryptionKeySalt': json['AccountEncryptionKeySalt'],
        'AccountEncryptedPrivateKey': json['AccountEncryptedPrivateKey'],
    };
}

export function ConfigureAccountRequestToJSON(value?: ConfigureAccountRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'PersonalVaultEncryptedPrivateKey': value.PersonalVaultEncryptedPrivateKey,
        'PersonalVaultPublicKey': value.PersonalVaultPublicKey,
        'AccountPublicKey': value.AccountPublicKey,
        'AccountName': value.AccountName,
        'AccountEncryptionKeySalt': value.AccountEncryptionKeySalt,
        'AccountEncryptedPrivateKey': value.AccountEncryptedPrivateKey,
    };
}


