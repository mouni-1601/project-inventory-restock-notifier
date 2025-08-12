import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { LoginRequest, RegisterRequest } from '../models/user.model';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login user and store token', () => {
    const loginData: LoginRequest = {
      email: 'test@example.com',
      password: 'password'
    };

    const mockResponse = {
      token: 'mock-token',
      user: { id: 1, username: 'testuser', email: 'test@example.com' }
    };

    service.login(loginData).subscribe(response => {
      expect(response).toEqual(mockResponse);
      expect(localStorage.getItem('token')).toBe('mock-token');
      expect(service.currentUserValue).toEqual(mockResponse.user);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/auth/login');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should register user', () => {
    const registerData: RegisterRequest = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password',
      phone: '+1234567890'
    };

    const mockResponse = { message: 'User created successfully' };

    service.register(registerData).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/auth/register');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should logout user', () => {
    localStorage.setItem('token', 'mock-token');
    localStorage.setItem('currentUser', JSON.stringify({ id: 1, username: 'test' }));

    service.logout();

    expect(localStorage.getItem('token')).toBeNull();
    expect(localStorage.getItem('currentUser')).toBeNull();
    expect(service.currentUserValue).toBeNull();
  });

  it('should check if user is authenticated', () => {
    expect(service.isAuthenticated()).toBeFalsy();

    localStorage.setItem('token', 'mock-token');
    expect(service.isAuthenticated()).toBeTruthy();
  });
});