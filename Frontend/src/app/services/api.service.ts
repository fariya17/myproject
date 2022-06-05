import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:5000/';
  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<any>(this.url+'product');


  }

  deleteProduct(id:any){
    return this.http.delete<any>(this.url+'product'+id);
  }

  saveProduct(data:any){
    return this.http.post<any>(this.url+'product', data);
  }
}
