import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HocPhan } from './HocPhan';

@Injectable({
  providedIn: 'root'
})
export class HocPhanService {
  private apiUrl = 'http://localhost:3000/hocPhanList';

  constructor(private http: HttpClient) {}

  getAllHocPhan(): Observable<HocPhan[]> {
    return this.http.get<HocPhan[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  createHocPhan(hocPhan: HocPhan): Observable<HocPhan> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<HocPhan>(this.apiUrl, hocPhan, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(error.message || 'Server error');
  }
}
