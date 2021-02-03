import { Component, OnInit } from '@angular/core';
import { MoneyApiService } from 'src/app/service/money-api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user_id:any;
  constructor(private _moneyService:MoneyApiService) { }

  ngOnInit() {
    // user info API called
    this._moneyService.getUserDetails().subscribe(res=>{
      if(res){
        this.user_id = res;
        this.user_id = this.user_id.data.user.id;
      }
    },err=>{
    })
  }

}
