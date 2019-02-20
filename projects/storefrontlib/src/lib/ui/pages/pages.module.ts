import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ContentPage
import { CartPageModule } from './cart-page/cart-page.module';
import { OrderConfirmationPageModule } from './order-confirmation-page/order-confirmation-page.module';

import { RegisterPageModule } from './register-page/register-page.module';
import { LoginPageModule } from './login-page/login-page.module';
import { StoreFinderPageModule } from './store-finder-page/store-finder-page.module';

// ContentPage: my Account Pages
import { PaymentDetailsPageModule } from './myaccount/payment-details-page/payment-details-page.module';
import { OrderDetailsPageModule } from './myaccount/order-details-page/order-details-page.module';

// CategoryPage
import { CategoryPageModule } from './category-page/category-page.module';

// ProductPage
import { ProductPageModule } from './product-page/product-page.module';
import { RouterModule } from '@angular/router';
import { CmsPageGuards } from '../../cms/guards/cms-page.guard';
import { PageLayoutComponent } from '../../cms/page-layout/page-layout.component';
import { PageLayoutModule } from '../../cms/page-layout/page-layout.module';
import { AuthGuard, NotAuthGuard } from '@spartacus/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HardcodedCheckoutComponent } from './checkout-page.interceptor';
import { CartNotEmptyGuard } from '../../cart/guards';

const pageModules = [
  CategoryPageModule,
  CartPageModule,
  OrderDetailsPageModule,
  OrderConfirmationPageModule,
  ProductPageModule,
  RegisterPageModule,
  LoginPageModule,
  PaymentDetailsPageModule,
  StoreFinderPageModule
  // new pages should be added above this line
];

@NgModule({
  imports: [
    CommonModule,
    ...pageModules,
    PageLayoutModule,
    RouterModule.forChild([
      {
        path: null,
        canActivate: [CmsPageGuards],
        component: PageLayoutComponent,
        data: { pageLabel: 'homepage', cxPath: 'home' }
      },
      {
        path: null,
        canActivate: [CmsPageGuards],
        component: PageLayoutComponent,
        data: { pageLabel: 'faq', cxPath: 'help' }
      },
      {
        path: null,
        canActivate: [CmsPageGuards],
        component: PageLayoutComponent,
        data: { pageLabel: 'sale', cxPath: 'sale' }
      },
      {
        path: null,
        canActivate: [CmsPageGuards],
        component: PageLayoutComponent,
        data: { pageLabel: 'contactUs', cxPath: 'contact' }
      },
      {
        path: null,
        canActivate: [CmsPageGuards],
        component: PageLayoutComponent,
        data: { pageLabel: 'termsAndConditions', cxPath: 'termsAndConditions' }
      },
      {
        path: null,
        canActivate: [AuthGuard, CmsPageGuards],
        data: { pageLabel: 'address-book', cxPath: 'addressBook' },
        component: PageLayoutComponent
      },
      {
        path: null,
        canActivate: [NotAuthGuard, CmsPageGuards],
        component: PageLayoutComponent,
        data: { pageLabel: 'forgotPassword', cxPath: 'forgotPassword' }
      },
      {
        path: null,
        canActivate: [AuthGuard, CmsPageGuards],
        component: PageLayoutComponent,
        data: { pageLabel: 'orders', cxPath: 'orders' }
      },
      {
        path: null,
        canActivate: [CmsPageGuards],
        component: PageLayoutComponent,
        data: { pageLabel: 'notFound', cxPath: 'pageNotFound' }
      },
      {
        path: null,
        component: PageLayoutComponent,
        canActivate: [CmsPageGuards],
        data: { pageLabel: 'resetPassword', cxPath: 'resetPassword' }
      },
      {
        path: null,
        canActivate: [AuthGuard, CmsPageGuards, CartNotEmptyGuard],
        component: PageLayoutComponent,
        data: { pageLabel: 'multiStepCheckoutSummaryPage', cxPath: 'checkout' }
      }
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HardcodedCheckoutComponent,
      multi: true
    }
  ]
})
export class PagesModule {}
