import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MoneyApiService {
  options: any;
  constructor(private httpClient: HttpClient) {
    const token = 'd801732e1fc1a8cfe9eb2870c688eb6771fc5dfee2988131db26eacaf30349cc';
    let header = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.options = {
      headers: header,
    };
  }


  getAllBudget() {
    return this.httpClient.get(environment.API_URL + "/budgets?include_accounts=true", this.options);
  }

  getUserDetails() {
    return this.httpClient.get(environment.API_URL + "/user", this.options);

  }

  getAccountByBudgetId(id) {
    return this.httpClient.get(environment.API_URL + "/budgets/" + id + "/accounts", this.options);
  }

  creteNewAccount(data, id) {
    return this.httpClient.post(environment.API_URL + "/budgets/" + id + "/accounts", data, this.options);
  }

  getPayersByBudgetId(id) {
    return this.httpClient.get(environment.API_URL + "/budgets/" + id + "/payees", this.options);
  }
}
