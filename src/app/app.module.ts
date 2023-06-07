import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SinhVienComponent } from './SinhVien/SinhVien.component';
import { GiaoVienComponent } from './GiaoVien/GiaoVien.component';
import { LoginComponent } from './Login/Login.component';
import { HttpServiceService } from './Http.service';
import { GiaoVienService } from './GiaoVien.service';
import { GiaoVienDetailComponent } from './DetailGV/DetailGV.component';
import{ DiemComponent} from'./Diem/Diem.component';
import { RegisterComponent } from './Register/Register.component';
import { HocPhanComponent } from './HocPhan/HocPhan.component';
import { SinhVienService } from './SinhVien.service';
import { HocPhanService } from './Hocphan.service';


@NgModule({
  declarations: [				
    AppComponent,
    SinhVienComponent,
    GiaoVienComponent,
    LoginComponent,
    GiaoVienDetailComponent,
    
    RegisterComponent,
    HocPhanComponent,
    DiemComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpServiceService, GiaoVienService,SinhVienService, HocPhanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
