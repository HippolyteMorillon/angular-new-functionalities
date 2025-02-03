import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../services/poke.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule],
  styleUrl: './login.component.css',
  standalone: true,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly apiService: ApiService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('username', this.loginForm.value.username);
    formData.append('password', this.loginForm.value.password);
    this.apiService.login(formData);
  }
}
