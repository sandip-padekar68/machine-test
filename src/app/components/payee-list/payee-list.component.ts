import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoneyApiService } from 'src/app/service/money-api.service';
import { NgxSpinnerService } from "ngx-spinner";  
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payee-list',
  templateUrl: './payee-list.component.html',
  styleUrls: ['./payee-list.component.css']
})
export class PayeeListComponent implements OnInit, OnDestroy {
data:any;
payees:any;
payeeData:Subscription;
id:any;
  constructor(private _moneyService:MoneyApiService,
    private SpinnerService: NgxSpinnerService,
    private route: ActivatedRoute,
    ) { }
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params['id']; // (+) converts string 'id' to a number

     });
      this.SpinnerService.show();  
      this.payeeData=this._moneyService.getPayersByBudgetId(this.id).subscribe(res=>{
        if(res){
          this.data = res;
          this.payees=this.data.data.payees;
          alert("Payees listing fetched successfully")
          this.SpinnerService.hide();  
        }
      },err=>{
        alert("error occured")
        this.SpinnerService.hide();  
      })
    }
    ngOnDestroy(){
      if(this.payeeData){
        this.payeeData.unsubscribe();
      }
    }

}
