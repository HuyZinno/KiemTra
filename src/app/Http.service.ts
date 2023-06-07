import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class HttpServiceService {
private REST_API_SERVER='http://localhost:3000';
private httpOptions={
headers: new HttpHeaders({
'Content-Type': 'application/json',
}),
};

constructor(private httpClient: HttpClient) { }

public getGiaoVienList(): Observable<any>{
const url=`${this.REST_API_SERVER}/giaovienList`;
return this.httpClient.get<any>(url,this.httpOptions);
}

public postGiaoVien(giaoVienData: any): Observable<any> {
  const url = `${this.REST_API_SERVER}/giaoVienList`;
  return this.httpClient.post<any>(url, giaoVienData, this.httpOptions);
}
}





