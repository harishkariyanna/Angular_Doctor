import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  form: FormGroup;
  error = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      roleId: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) return;
    const payload = {
      userName: this.form.value.userName,
      email: this.form.value.email,
      password: this.form.value.password,
      roleId: this.form.value.roleId
    };
    this.auth.register(payload as any).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => (this.error = err?.error?.message || 'Registration failed')
    });
  }
}
