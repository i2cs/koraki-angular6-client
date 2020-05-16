/**
 * Koraki API v1.0
 * Contains public API endpoints. Invoking sequred APIs require either Bearer token (auth token created when logging in to admin UI) or Basic digest (using client id and client secret of an application). If invoked with auth token, you need to pass `applicationId` with requests to identify the application.
 *
 * OpenAPI spec version: v1.0
 * Contact: madusha@koraki.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { MailChimpListItem } from './mailChimpListItem';


export interface MailChimpListResponseModel { 
    lists?: Array<MailChimpListItem>;
    accessToken?: string;
    url?: string;
}
