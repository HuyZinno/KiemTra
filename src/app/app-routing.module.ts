import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { SinhVienListComponent } from './SinhVienList/SinhVienList.component';
// import { SinhVienDetailComponent } from './SinhVienDetail/SinhVienDetail.component';
import { GiaoVienComponent } from './GiaoVien/GiaoVien.component';
import { GiaoVienDetailComponent } from './DetailGV/DetailGV.component';
import { LoginComponent } from './Login/Login.component';
import { SinhVienComponent } from './SinhVien/SinhVien.component';
import { DiemComponent } from './Diem/Diem.component';
import { HocPhanComponent } from './HocPhan/HocPhan.component';
import { RegisterComponent } from './Register/Register.component';
const routes: Routes = [
  // { path: '', redirectTo: '/sinhvien', pathMatch: 'full' },
  // { path: 'sinhvien', component: SinhVienListComponent },
  // { path: 'sinhvien/:id', component: SinhVienDetailComponent },
  { path: 'GiaoVien', component: GiaoVienComponent },
  { path: 'DetailGV', component: GiaoVienDetailComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'SinhVien', component: SinhVienComponent },
  { path: 'Diem', component: DiemComponent },
  { path: 'HocPhan', component: HocPhanComponent },
  { path: 'Register', component: RegisterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
