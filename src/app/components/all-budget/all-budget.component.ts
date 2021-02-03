import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoneyApiService } from 'src/app/service/money-api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Subscription } from 'rxjs';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-all-budget',
  templateUrl: './all-budget.component.html',
  styleUrls: ['./all-budget.component.css']
})
export class AllBudgetComponent implements OnInit, OnDestroy {
  data: any;
  budgets: any;
  budgetsData: Subscription;
  constructor(private _moneyService: MoneyApiService,
    private SpinnerService: NgxSpinnerService,
    public toastr: ToastrManager) { }
  //on init component loader start and API call for budget listing
  ngOnInit() {
    this.SpinnerService.show();
    this.budgetsData = this._moneyService.getAllBudget().subscribe(res => {
      if (res) {
        this.data = res;
        this.budgets = this.data.data.budgets;
        this.toastr.successToastr('Budget listing fetched successfully.', 'Success!');
        this.SpinnerService.hide();
      }
    }, err => {
      //error handled and spinner closed
      this.toastr.errorToastr('Something went wrong.', 'Oops!');
      this.SpinnerService.hide();
    })
  }
  ngOnDestroy() {
    if (this.budgetsData) {
      this.budgetsData.unsubscribe();
    }
  }

}
