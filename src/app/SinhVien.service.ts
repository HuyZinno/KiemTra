import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SinhVienService {
  private apiUrl = 'http://localhost:3000/sinhVienList'; // Thay đổi đường dẫn API tùy theo thiết kế của bạn

  constructor(private http: HttpClient) { }

  getAllSinhVien(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getSinhVienById(maSV: string): Observable<any> {
    const url = `${this.apiUrl}/${maSV}`;
    return this.http.get<any>(url);
  }

  createSinhVien(sinhVien: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, sinhVien);
  }

  updateSinhVien(maSV: string, sinhVien: any): Observable<any> {
    const url = `${this.apiUrl}/${maSV}`;
    return this.http.put<any>(url, sinhVien);
  }

  deleteSinhVien(maSV: string): Observable<any> {
    const url = `${this.apiUrl}/${maSV}`;
    return this.http.delete<any>(url);
  }
}