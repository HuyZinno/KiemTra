import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiaoVien } from './GiaoVien';

@Injectable({
  providedIn: 'root'
})
export class GiaoVienService {
  private REST_API_SERVER = 'http://localhost:3000'; // đường dẫn đến server
  private HttpOptions = {  
    headers: new HttpHeaders({
      'content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient){}

  // lấy tất cả thông tin giáo viên từ json server về (lấy dữ liệu về => phương thức `get`)
  public getTeachers(): Observable<GiaoVien[]>{
    const url =`${this.REST_API_SERVER}/giaoVienList`;
    return this.httpClient.get<GiaoVien[]>(url, this.HttpOptions);
  }

  public getTeacher(maGV: number): Observable<GiaoVien>{
    const url =`${this.REST_API_SERVER}/giaoVienList/${maGV}`;
    return this.httpClient.get<GiaoVien>(url, this.HttpOptions);
  }

  // gửi dữ liệu lên server để thêm mới một giáo viên (gửi dữ liệu lên để thêm => phương thức `post`)
  public postTeacher(data: GiaoVien): Observable<GiaoVien>{
    const url=`${this.REST_API_SERVER}/giaoVienList`;
    // console.log('postTeacher =', url);
    // console.log('postTeacher: body', data);
    return this.httpClient.post<GiaoVien>(url, data, this.HttpOptions);
  }

  // cập nhật dữ liệu của một giáo viên khi có thay đổi (update => phương thức `put` hoặc `patch`)
  public toggleFavorite(data: GiaoVien): Observable<any> {
    const url=`${this.REST_API_SERVER}/giaoVienList/${data.maGV}`;
    return this.httpClient.put<GiaoVien>(url, data, this.HttpOptions);
  }

  // xóa một giáo viên ( xóa => phương thức delete) 
  public deleteTeacher(maGV: number): Observable<any> {
    const url=`${this.REST_API_SERVER}/giaoVienList/${maGV}`;
    return this.httpClient.delete<any>(url, this.HttpOptions);
  }
}
