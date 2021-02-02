import { Component, OnInit ,OnDestroy } from '@angular/core';
import { MoneyApiService } from 'src/app/service/money-api.service';
import { NgxSpinnerService } from "ngx-spinner";  
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-budget',
  templateUrl: './all-budget.component.html',
  styleUrls: ['./all-budget.component.css']
})
export class AllBudgetComponent implements OnInit, OnDestroy {
  data:any;
  budgets:any;
  budgetsData:Subscription;
  constructor(private _moneyService:MoneyApiService,
    private SpinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.SpinnerService.show();  
    this.budgetsData=this._moneyService.getAllBudget().subscribe(res=>{
      if(res){
        this.data = res;
        this.budgets=this.data.data.budgets;
        console.log(this.budgets)
        alert("Budget listing fetched successfully")
        this.SpinnerService.hide();  
      }
    },err=>{
      alert("error occured"+err)
      this.SpinnerService.hide();  
    })
  }
  ngOnDestroy(){
    if(this.budgetsData){
      this.budgetsData.unsubscribe();
    }
  }

}
