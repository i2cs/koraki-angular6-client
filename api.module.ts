import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AjaxService } from './api/ajax.service';
import { AnalyticsService } from './api/analytics.service';
import { ApplicationsService } from './api/applications.service';
import { FacebookService } from './api/facebook.service';
import { IntercomService } from './api/intercom.service';
import { InvoicesService } from './api/invoices.service';
import { MailChimpService } from './api/mailChimp.service';
import { NotificationsService } from './api/notifications.service';
import { PaymentService } from './api/payment.service';
import { PrivyService } from './api/privy.service';
import { ShopifyService } from './api/shopify.service';
import { SubscriptionsService } from './api/subscriptions.service';
import { TwitterService } from './api/twitter.service';
import { WidgetService } from './api/widget.service';
import { WordpressService } from './api/wordpress.service';
import { ZapierService } from './api/zapier.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AjaxService,
    AnalyticsService,
    ApplicationsService,
    FacebookService,
    IntercomService,
    InvoicesService,
    MailChimpService,
    NotificationsService,
    PaymentService,
    PrivyService,
    ShopifyService,
    SubscriptionsService,
    TwitterService,
    WidgetService,
    WordpressService,
    ZapierService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
