import { Component, OnInit } from '@angular/core';
import { SinhVienService } from '../SinhVien.service';
import { SinhVien } from '../SinhVien';

@Component({
  selector: 'app-SinhVien',
  templateUrl: './SinhVien.component.html',
  styleUrls: ['./SinhVien.component.css']
})
export class SinhVienComponent {
  sinhVienList: SinhVien[] = [];

  mSV: string = '';
  tenSV: string = '';
  email: string = '';
  gioiTinh: string = '';
  namSinh: number = 0;
  sdt: string = '';
  diaChi: string = '';
  maLop: string = '';

  constructor(private sinhVienService: SinhVienService) {}
  ngOnInit() {
    this.getAllSinhVien();
  }
  getAllSinhVien() {
    this.sinhVienService.getAllSinhVien().subscribe(
      (response) => {
        console.log('Sinh vien list:', response);
        this.sinhVienList = response;
      },
      (error) => {
        console.error('Error getting sinh vien list:', error);
      }
    );
  }

  submitForm() {
    const sinhVien = {
      mSV: this.mSV,
      tenSV: this.tenSV,
      email: this.email,
      gioiTinh: this.gioiTinh,
      namSinh: this.namSinh,
      sdt: this.sdt,
      diaChi: this.diaChi,
      maLop: this.maLop
    };

    this.sinhVienService.createSinhVien(sinhVien).subscribe(
      (response) => {
        console.log('Sinh vien added successfully:', response);
        this.sinhVienList.push(response); // Thêm sinh viên mới vào danh sách sau khi nhận phản hồi từ API
        this.resetForm();
      },
      (error) => {
        console.error('Error adding sinh vien:', error);
      }
    );
  }

  removeStudent(mSV: string) {
    const index = this.sinhVienList.findIndex((sv) => sv.maSV === mSV);
    if (index !== -1) {
      this.sinhVienList.splice(index, 1);
    }
  }

  resetForm() {
    this.mSV = '';
    this.tenSV = '';
    this.email = '';
    this.gioiTinh = '';
    this.namSinh = 0;
    this.sdt = '';
    this.diaChi = '';
    this.maLop = '';
  }
}