import { Component, OnInit } from '@angular/core';
import { HocPhan } from '../HocPhan';
import { HocPhanService } from '../Hocphan.service';
@Component({
  selector: 'app-HocPhan',
  templateUrl: './HocPhan.component.html',
  styleUrls: ['./HocPhan.component.css']
})
export class HocPhanComponent implements OnInit {
  hocPhanList: HocPhan[] = [];

  maMon: string = '';
  tenMon: string = '';
  soTC: number = 0;
  maGV: string = '';

  constructor(private hocPhanService: HocPhanService) {}

  ngOnInit() {
    this.getAllHocPhan();
  }

  getAllHocPhan() {
    this.hocPhanService.getAllHocPhan().subscribe(
      (response) => {
        this.hocPhanList = response;
      },
      (error) => {
        console.error('Error getting hoc phan:', error);
      }
    );
  }

  submitForm() {
    const hocPhan = {
      maMon: this.maMon,
      tenMon: this.tenMon,
      soTC: this.soTC,
      maGV: this.maGV
    };

    this.hocPhanService.createHocPhan(hocPhan).subscribe(
      (response) => {
        console.log('Hoc phan added successfully:', response);
        this.hocPhanList.push(response);
        this.resetForm();
      },
      (error) => {
        console.error('Error adding hoc phan:', error);
      }
    );
  }

  removeHocPhan(maMon: string) {
    const index = this.hocPhanList.findIndex((hp) => hp.maMon === maMon);
    if (index !== -1) {
      this.hocPhanList.splice(index, 1);
    }
  }

  resetForm() {
    this.maMon = '';
    this.tenMon = '';
    this.soTC = 0;
    this.maGV = '';
  }
}
