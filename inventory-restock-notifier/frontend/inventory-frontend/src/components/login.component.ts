import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-page">
      <div class="login-container">
        <div class="login-header">
          <div class="logo">
            <i class="warehouse-icon">📦</i>
            <h1>Inventory Manager</h1>
            <p>Warehouse Management System</p>
          </div>
        </div>
        
        <div class="login-form-container">
          <h2>Welcome Back</h2>
          <p class="subtitle">Sign in to your account</p>
          
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <div class="input-container">
                <i class="input-icon">✉️</i>
                <input
                  type="email"
                  id="email"
                  formControlName="email"
                  class="form-control"
                  placeholder="Enter your email"
                  [class.is-invalid]="loginForm.get('email')?.invalid && loginForm.get('email')?.touched"
                >
              </div>
              <div class="invalid-feedback" *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched">
                <div *ngIf="loginForm.get('email')?.errors?.['required']">Email is required</div>
                <div *ngIf="loginForm.get('email')?.errors?.['email']">Please enter a valid email</div>
              </div>
            </div>

            <div class="form-group">
              <div class="input-container">
                <i class="input-icon">🔒</i>
                <input
                  type="password"
                  id="password"
                  formControlName="password"
                  class="form-control"
                  placeholder="Enter your password"
                  [class.is-invalid]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched"
                >
              </div>
              <div class="invalid-feedback" *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
                Password is required
              </div>
            </div>

            <button type="submit" [disabled]="loginForm.invalid || loading" class="btn btn-primary">
              <span *ngIf="loading" class="spinner">⏳</span>
              {{ loading ? 'Signing in...' : 'Sign In' }}
            </button>

            <div class="alert alert-danger" *ngIf="error">
              <i class="error-icon">⚠️</i>
              {{ error }}
            </div>
          </form>
          
          <div class="demo-credentials">
            <h4>Demo Credentials:</h4>
            <div class="credential-item">
              <strong>Admin:</strong> rajesh@warehouse.com / password
            </div>
            <div class="credential-item">
              <strong>Manager:</strong> priya@warehouse.com / password
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-page {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .login-container {
      background: white;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      overflow: hidden;
      width: 100%;
      max-width: 450px;
      margin: 20px;
    }
    
    .login-header {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      padding: 40px 30px;
      text-align: center;
      color: white;
    }
    
    .logo .warehouse-icon {
      font-size: 3rem;
      margin-bottom: 10px;
      display: block;
    }
    
    .logo h1 {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 600;
    }
    
    .logo p {
      margin: 5px 0 0 0;
      opacity: 0.9;
      font-size: 0.9rem;
    }
    
    .login-form-container {
      padding: 40px 30px;
    }
    
    .login-form-container h2 {
      margin: 0 0 5px 0;
      color: #333;
      font-size: 1.5rem;
      font-weight: 600;
    }
    
    .subtitle {
      color: #666;
      margin: 0 0 30px 0;
      font-size: 0.9rem;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    .input-container {
      position: relative;
      display: flex;
      align-items: center;
    }
    
    .input-icon {
      position: absolute;
      left: 15px;
      z-index: 2;
      font-size: 1.1rem;
    }
    
    .form-control {
      width: 100%;
      padding: 15px 15px 15px 50px;
      border: 2px solid #e1e5e9;
      border-radius: 10px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: #f8f9fa;
    }
    
    .form-control:focus {
      outline: none;
      border-color: #4facfe;
      background: white;
      box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
    }
    
    .form-control::placeholder {
      color: #adb5bd;
    }
    
    .is-invalid {
      border-color: #dc3545 !important;
      background: #fff5f5 !important;
    }
    
    .invalid-feedback {
      color: #dc3545;
      font-size: 0.875em;
      margin-top: 5px;
      padding-left: 5px;
    }
    
    .btn {
      width: 100%;
      padding: 15px;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 10px;
    }
    
    .btn-primary {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      color: white;
    }
    
    .btn-primary:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(79, 172, 254, 0.3);
    }
    
    .btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none !important;
    }
    
    .spinner {
      margin-right: 8px;
    }
    
    .alert-danger {
      background: #fff5f5;
      border: 1px solid #fed7d7;
      color: #c53030;
      padding: 12px 15px;
      border-radius: 8px;
      margin-top: 15px;
      display: flex;
      align-items: center;
    }
    
    .error-icon {
      margin-right: 8px;
    }
    
    .demo-credentials {
      margin-top: 30px;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 10px;
      border: 1px solid #e9ecef;
    }
    
    .demo-credentials h4 {
      margin: 0 0 15px 0;
      color: #495057;
      font-size: 0.9rem;
      font-weight: 600;
    }
    
    .credential-item {
      margin-bottom: 8px;
      font-size: 0.85rem;
      color: #6c757d;
    }
    
    .credential-item strong {
      color: #495057;
    }
    
    @media (max-width: 480px) {
      .login-container {
        margin: 10px;
      }
      
      .login-header {
        padding: 30px 20px;
      }
      
      .login-form-container {
        padding: 30px 20px;
      }
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';

    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.error = error.error?.message || 'Login failed';
        this.loading = false;
      }
    });
  }
}