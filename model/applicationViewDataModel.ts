/**
 * Koraki API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface ApplicationViewDataModel { 
    status?: ApplicationViewDataModel.StatusEnum;
    applicationName: string;
    token?: string;
    clientId?: string;
    clientSecret?: string;
    analyticsId?: string;
    analyticsToken?: string;
    url: string;
    notificationsCount?: number;
    lastNotificationTime?: Date;
    lastNotificationSeconds?: number;
    createdOn?: Date;
    id?: number;
}
export namespace ApplicationViewDataModel {
    export type StatusEnum = 'Created' | 'Active' | 'Disabled' | 'DuePayment';
    export const StatusEnum = {
        Created: 'Created' as StatusEnum,
        Active: 'Active' as StatusEnum,
        Disabled: 'Disabled' as StatusEnum,
        DuePayment: 'DuePayment' as StatusEnum
    };
}
