import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';
import { ContentServcieAbstract } from './core/services/abstract/content.service.abstract';
import { ContentService } from './core/services/content.service';

import { BuyerComponent } from './component/buyer/buyer.component';
import { SellerComponent } from './component/seller/seller.component';
import { RentComponent } from './component/rent/rent.component';
import { AboutComponent } from './component/about/about.component';
import { FranchisingComponent } from './component/franchising/franchising.component';
import { BuyerConsultationComponent } from './component/buyer/buyer-consultation/buyer-consultation.component';
import { BuyerFaqComponent } from './component/buyer/buyer-faq/buyer-faq.component';

import { BuyerStepsComponent } from './component/buyer/buyer-steps/buyer-steps.component';
import { RightAlignComponent } from './shared/components/right-align/right-align.component';
import { LeftAlignComponent } from './shared/components/left-align/left-align.component';
import { CenterAlignComponent } from './shared/components/center-align/center-align.component';
import { FaqComponent } from './shared/components/faq/faq.component';
import { SuccessStepsComponent } from './shared/components/success-steps/success-steps.component';
import { CompareTableComponent } from './shared/components/compare-table/compare-table.component';
import { ContactNumberComponent } from './shared/components/contact-number/contact-number.component';
import { SellerStepsComponent } from './component/seller/seller-steps/seller-steps.component';
import { SellerConsultationComponent } from './component/seller/seller-consultation/seller-consultation.component';
import { SellerFlatRateComponent } from './component/seller/seller-flat-rate/seller-flat-rate.component';
import { SellerFullServiceComponent } from './component/seller/seller-full-service/seller-full-service.component';
import { LandlordComponent } from './component/landlord/landlord.component';
import { RentStepsComponent } from './component/rent/rent-steps/rent-steps.component';
import { LandlordFaqComponent } from './component/landlord/landlord-faq/landlord-faq.component';
import { TenatFaqComponent } from './component/tenat-faq/tenat-faq.component';
import { FranchisingFaqComponent } from './component/franchising/franchising-faq/franchising-faq.component';
import { FranchisingRequestFormComponent } from './component/franchising/franchising-request-form/franchising-request-form.component';
import { SendEmailServiceAbstract } from './core/services/abstract/send-email.service.abstract';
import { SendEmailService } from './core/services/send-email/send-email.service';
import { ForbesComponent } from './shared/components/forbes/forbes.component';
import { MovementComponent } from './shared/components/movement/movement.component';
import { ContactUsComponent } from './component/about/contact-us/contact-us.component';
import { JoinUsComponent } from './component/about/join-us/join-us.component';
import { DigitalAdsComponent } from './component/about/digital-ads/digital-ads.component';
import { FiveLawsComponent } from './component/about/five-laws/five-laws.component';
import { LearnDossComponent } from './component/about/learn-doss/learn-doss.component';
import { RentConsultationComponent } from './component/rent/rent-consultation/rent-consultation.component';
import { FullServiceFormComponent } from './component/seller/seller-full-service/full-service-form/full-service-form.component';
import { SellerFaqComponent } from './component/seller/seller-faq/seller-faq.component';
import { Hero2Component } from './shared/components/hero2/hero2.component';
import { NgxStripeModule } from 'ngx-stripe';
import { StripeCheckoutComponent } from './shared/components/stripe-checkout/stripe-checkout.component';
import { TermsComponent } from './component/footer/terms/terms/terms.component';
import { PolicyComponent } from './component/footer/policy/policy/policy.component';
import { StripePaymentService } from './core/services/stripe-payment.service';
import { DossHomeLoansComponent } from './component/doss-home-loans/doss-home-loans.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StripePaymentServiceAbstract } from './core/services/abstract/stripe-payment.service.abstract';
import { StateServiceAbstract } from './core/services/abstract/state.service.abstract';
import { StateService } from './core/services/state.service';
import { ConfirmPaymentModalComponent } from './core/components/modal/confirm-payment-modal.component';
import { ModalServiceAbstract } from './core/services/abstract/modal.service.abstract';
import { ModalService } from './core/services/modal.service';
import { environment } from 'src/environments/environment';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buyer', component: BuyerComponent },
  { path: 'seller', component: SellerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'franchising', component: FranchisingComponent },
  { path: 'rent', component: RentComponent },
  { path: 'buyer-faq', component: BuyerFaqComponent },
  { path: 'buyer-steps', component: BuyerStepsComponent },
  { path: 'buyer-consultation', component: BuyerConsultationComponent },
  { path: 'seller-steps', component: SellerStepsComponent },
  { path: 'seller-consultation', component: SellerConsultationComponent },
  { path: 'seller-flat-rate', component: SellerFlatRateComponent },
  { path: 'seller-full-service', component: SellerFullServiceComponent },
  { path: 'seller-faq', component: SellerFaqComponent },
  { path: 'rent-steps', component: RentStepsComponent },
  { path: 'rent-consultation', component: RentConsultationComponent },
  { path: 'landlord', component: LandlordComponent },
  { path: 'landlord-faq', component: LandlordFaqComponent },
  { path: 'tenant-faq', component: TenatFaqComponent },
  { path: 'franchising-faq', component: FranchisingFaqComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'join-us', component: JoinUsComponent },
  { path: 'digital-ads', component: DigitalAdsComponent },
  { path: 'five-laws', component: FiveLawsComponent },
  { path: 'learn-doss', component: LearnDossComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'home-loans', component: DossHomeLoansComponent },
  { path: '**', component: HomeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    RightAlignComponent,
    LeftAlignComponent,
    FooterComponent,
    CenterAlignComponent,
    BuyerComponent,
    SellerComponent,
    RentComponent,
    AboutComponent,
    FranchisingComponent,
    BuyerConsultationComponent,
    BuyerFaqComponent,
    FaqComponent,
    SuccessStepsComponent,
    BuyerStepsComponent,
    CompareTableComponent,
    ContactNumberComponent,
    SellerStepsComponent,
    SellerConsultationComponent,
    SellerFlatRateComponent,
    SellerFullServiceComponent,
    LandlordComponent,
    RentStepsComponent,
    LandlordFaqComponent,
    TenatFaqComponent,
    FranchisingFaqComponent,
    FranchisingRequestFormComponent,
    ForbesComponent,
    MovementComponent,
    ContactUsComponent,
    JoinUsComponent,
    DigitalAdsComponent,
    FiveLawsComponent,
    LearnDossComponent,
    RentConsultationComponent,
    FullServiceFormComponent,
    SellerFaqComponent,
    Hero2Component,
    StripeCheckoutComponent,
    TermsComponent,
    PolicyComponent,
    DossHomeLoansComponent,
    ConfirmPaymentModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot(environment.stripe.pk),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    { provide: ContentServcieAbstract, useClass: ContentService },
    { provide: SendEmailServiceAbstract, useClass: SendEmailService },
    { provide: StripePaymentServiceAbstract, useClass: StripePaymentService },
    { provide: StateServiceAbstract, useClass: StateService },
    { provide: ModalServiceAbstract, useClass: ModalService }
  ],
  entryComponents: [
    RightAlignComponent,
    LeftAlignComponent,
    BuyerConsultationComponent,
    BuyerStepsComponent,
    BuyerFaqComponent,
    SellerConsultationComponent,
    SellerStepsComponent,
    RentStepsComponent,
    LandlordFaqComponent,
    ConfirmPaymentModalComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
