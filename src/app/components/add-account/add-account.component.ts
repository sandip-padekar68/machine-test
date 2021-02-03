import { Component, OnInit, Inject } from '@angular/core';
import { MoneyApiService } from 'src/app/service/money-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  profileForm: FormGroup;
  types: any = []
  public accountId: any;
  constructor(private _moneyService: MoneyApiService,
    private route: ActivatedRoute,
    private router: Router,
    public toastr: ToastrManager
  ) { }
  ngOnInit() {
    this.types = ['checking', 'savings', 'cash', 'creditCard'];
    //REACTIVE FORM USED WITH REQUIRED CONDITION
    this.profileForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      balance: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required)
    });

    this.route.params.subscribe(params => {
      this.accountId = params['id']; // (+) converts string 'id' to a number
    });
  }
  createNew() {
    //POST API with required params
    let account = this.profileForm.value;
    this._moneyService.creteNewAccount({ account: account }, this.accountId).subscribe(res => {
      if (res) {
        this.toastr.successToastr('Account created sucessfully.', 'Success!');
        this.router.navigate(['/account-listing/' + this.accountId]);
      }
    }, err => {
      this.toastr.errorToastr('Something went wrong.', 'Oops!');
    })
  }


}
