import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../User.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string | undefined;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  handleLogin(form: FormGroup) {
    if (form.valid) {
      const { username, password } = form.value;
      this.userService.login(username, password).subscribe((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          this.router.navigateByUrl('/SinhVien');
        } else {
          this.loginForm.reset();
          this.message = 'Username or password incorrect';
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
