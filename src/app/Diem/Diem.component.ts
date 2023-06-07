import { Component, OnInit } from '@angular/core';
import{ Diem } from '../Diem';
@Component({
  selector: 'app-Diem',
  templateUrl: './Diem.component.html',
  styleUrls: ['./Diem.component.css']
})
export class DiemComponent {
  diemList: Diem[] = [];
  maSV: string = '';
  maMon: string = '';
  diemThi: number = 0;
  diemGK: number = 0;
  diemCC: number = 0;
  diemMon: number = 0;
  namHoc: string = '';
  hocKy: string = '';

  submitScoreForm() {
    const diem: Diem = {
      maSV: this.maSV,
      maMon: this.maMon,
      diemThi: this.diemThi,
      diemGK: this.diemGK,
      diemCC: this.diemCC,
      diemMon: this.diemMon,
      namHoc: this.namHoc,
      hocKy: this.hocKy
    };

    this.diemList.push(diem);

    // Reset form fields
    this.maSV = '';
    this.maMon = '';
    this.diemThi = 0;
    this.diemGK = 0;
    this.diemCC = 0;
    this.diemMon = 0;
    this.namHoc = '';
    this.hocKy = '';
  }

  removeScore(maSV: string) {
    this.diemList = this.diemList.filter(diem => diem.maSV !== maSV);
  }
}