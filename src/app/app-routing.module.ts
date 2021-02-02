import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBudgetComponent } from './components/all-budget/all-budget.component';
import { AccountListingComponent } from './components/account-listing/account-listing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { PayeeListComponent } from './components/payee-list/payee-list.component';

const routes: Routes = [
  {path:'', component: AllBudgetComponent},
  {path:'all-budget-listing', component: AllBudgetComponent},
  {path:'account-listing/:id', component: AccountListingComponent},
  {path:'add-account/:id', component: AddAccountComponent},
  {path:'payee-list/:id', component: PayeeListComponent},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
