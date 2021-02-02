import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoneyApiService } from 'src/app/service/money-api.service';
import { NgxSpinnerService } from "ngx-spinner";  
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-listing',
  templateUrl: './account-listing.component.html',
  styleUrls: ['./account-listing.component.css']
})
export class AccountListingComponent implements OnInit, OnDestroy {
data:any;
id:string
accounts:any;
accountData:Subscription
  constructor(private _moneyService:MoneyApiService,
    private SpinnerService: NgxSpinnerService,
    private route: ActivatedRoute,
    ) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params['id']; // (+) converts string 'id' to a number

     });
      this.SpinnerService.show();  
      this.accountData=this._moneyService.getAccountByBudgetId(this.id).subscribe(res=>{
        if(res){
          this.data = res;
          this.accounts=this.data.data.accounts;
          this.accounts.sort( function ( a, b ) { return b.balance - a.balance; } );
          alert("Account listing fetched successfully")
          this.SpinnerService.hide();  
        }
      },err=>{
        alert("error occured")
        this.SpinnerService.hide();  
      })
    }
   ngOnDestroy(){
    if(this.accountData){
      this.accountData.unsubscribe();
    }
   }
}
