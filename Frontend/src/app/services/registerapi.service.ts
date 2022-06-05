import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterapiService {
  url = 'http://localhost:5000/';

constructor(private http:HttpClient) { }



get(): Observable<any>{
  return this.http.get<any>(this.url+'register');


}

login(data:any){
  return this.http.post<any>(this.url+'register/authenticate',data);
}

register(data:any){
  return this.http.post<any>(this.url+'register', data);
}

}
