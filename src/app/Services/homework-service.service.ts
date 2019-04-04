import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeworkServiceService {
  hwurl:string='http://localhost:3000/homework/';
  constructor(public _http:HttpClient) { }

  onhomework(h_class:number,h_div:string)
  {
    return this._http.get(this.hwurl+h_class+'/'+h_div);
  }

}
