import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AllBudgetComponent } from './components/all-budget/all-budget.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { AccountListingComponent } from './components/account-listing/account-listing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddAccountComponent } from './components/add-account/add-account.component';  
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PayeeListComponent } from './components/payee-list/payee-list.component';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllBudgetComponent,
    AccountListingComponent,
    AddAccountComponent,
    PageNotFoundComponent,
    PayeeListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
