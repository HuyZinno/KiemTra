import { Component, OnInit } from '@angular/core';
import { GiaoVien } from '../GiaoVien';
import { GiaoVienService } from '../GiaoVien.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-DetailGV',
  templateUrl: './DetailGV.component.html',
  styleUrls: ['./DetailGV.component.css']
})
export class GiaoVienDetailComponent {
  giaoVien!: GiaoVien;
  
  constructor(private route: ActivatedRoute, private giaoVienService: GiaoVienService) {
  this.route.params.subscribe(params => {
  const maGV = params['maGV'];
  this.giaoVienService.getTeacher(maGV).subscribe((giaoVien: GiaoVien) => {
  this.giaoVien = giaoVien;
  })
  });
  }
  }
  
  
  
  
  
  
  