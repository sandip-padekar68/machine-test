import { Component, OnInit, Inject } from '@angular/core';
import { MoneyApiService } from 'src/app/service/money-api.service';
import { NgxSpinnerService } from "ngx-spinner";  
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  profileForm: FormGroup;
  types:any=[]
  public accountId:any;
  constructor(private _moneyService:MoneyApiService,
    private SpinnerService: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,

   
    ) { }
  ngOnInit() {
    this.types=['checking','savings','cash','creditCard'];
    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      balance: new FormControl('',Validators.required),
      type: new FormControl('',Validators.required)

    });
    this.route.params.subscribe(params => {
      this.accountId = params['id']; // (+) converts string 'id' to a number
   });
  }
  createNew(){
    let account=this.profileForm.value;
    this._moneyService.creteNewAccount({account:account},this.accountId).subscribe(res=>{
      if(res){
        alert("Account created sucessfully")
        this.router.navigate(['/account-listing/'+this.accountId]);
      }
    },err=>{
      alert("error occured")
    })
  }
 

}
