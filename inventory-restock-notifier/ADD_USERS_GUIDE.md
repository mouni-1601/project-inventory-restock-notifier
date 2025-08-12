# How to Add Different Users

## Method 1: Direct Database Insert

### Step 1: Run SQL Script
```bash
psql -U postgres -d inventory_db
\i database/add-users.sql
```

### Step 2: Verify Users Added
```sql
SELECT * FROM users;
```

## Method 2: Using API Registration

### Using Postman/Thunder Client
```
POST http://localhost:3000/api/auth/register
Content-Type: application/json

{
  "username": "manager",
  "email": "manager@warehouse.com",
  "password": "password123",
  "phone": "+1234567891"
}
```

### Using cURL
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "manager",
    "email": "manager@warehouse.com", 
    "password": "password123",
    "phone": "+1234567891"
  }'
```

## Method 3: Add Registration Component (Frontend)

### Create Register Component
```typescript
// Add to login.component.ts
showRegister = false;

registerForm = this.formBuilder.group({
  username: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required],
  phone: ['', Validators.required]
});

onRegister(): void {
  if (this.registerForm.invalid) return;
  
  this.authService.register(this.registerForm.value).subscribe({
    next: () => {
      alert('User registered successfully!');
      this.showRegister = false;
    },
    error: (error) => {
      this.error = error.error?.message || 'Registration failed';
    }
  });
}
```

### Add Register Form to Template
```html
<!-- Add to login.component.ts template -->
<div class="register-form" *ngIf="showRegister">
  <h3>Register New User</h3>
  <form [formGroup]="registerForm" (ngSubmit)="onRegister()">
    <input formControlName="username" placeholder="Username" class="form-control">
    <input formControlName="email" placeholder="Email" class="form-control">
    <input formControlName="password" type="password" placeholder="Password" class="form-control">
    <input formControlName="phone" placeholder="Phone" class="form-control">
    
    <button type="submit" class="btn btn-primary">Register</button>
    <button type="button" (click)="showRegister = false" class="btn btn-secondary">Cancel</button>
  </form>
</div>

<button (click)="showRegister = true" class="btn btn-link">Register New User</button>
```

## Pre-created Users (All password: 'password')

| Username   | Email                    | Role       | Phone        |
|------------|--------------------------|------------|--------------|
| admin      | admin@warehouse.com      | Admin      | +1234567890  |
| manager    | manager@warehouse.com    | Manager    | +1234567891  |
| staff1     | staff1@warehouse.com     | Staff      | +1234567892  |
| staff2     | staff2@warehouse.com     | Staff      | +1234567893  |
| supervisor | supervisor@warehouse.com | Supervisor | +1234567894  |
| clerk      | clerk@warehouse.com      | Clerk      | +1234567895  |

## Quick Add Users Commands

### Database Method
```bash
psql -U postgres -d inventory_db -f database/add-users.sql
```

### API Method (Multiple Users)
```bash
# Manager
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d '{"username":"manager","email":"manager@warehouse.com","password":"password123","phone":"+1234567891"}'

# Staff1
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d '{"username":"staff1","email":"staff1@warehouse.com","password":"password123","phone":"+1234567892"}'

# Staff2
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d '{"username":"staff2","email":"staff2@warehouse.com","password":"password123","phone":"+1234567893"}'
```

## Login with Different Users

After adding users, you can login with any of these credentials:
- **Email**: manager@warehouse.com, **Password**: password123
- **Email**: staff1@warehouse.com, **Password**: password123
- **Email**: staff2@warehouse.com, **Password**: password123

All users will have access to the same inventory dashboard functionality.