import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../User.service'; 

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  message!: string;
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  handleRegiter(form: FormGroup) {
    if (form.valid) {
      this.userService.register(form.value).subscribe(user => {
        this.router.navigateByUrl('login');
      })
    } else {
      form.markAllAsTouched();
    }
  }
}

