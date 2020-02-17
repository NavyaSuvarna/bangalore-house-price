import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http:HttpClient) { }

  get_location_name():Observable<any>{
    let url = "http://127.0.0.1:5000/get_location_names";
    console.log(url)
    return this.http.get(url);

  }
  predict_home_price(totalsqft:any,location:any,bath:any,bhk:any):Observable<any>{
    let url = "http://127.0.0.1:5000/predict_home_price";
    let user = {"total_sqft":totalsqft,"location":location,"bath":bath,"bhk":bhk}
    return this.http.post<any>(url, user)
  }
}
