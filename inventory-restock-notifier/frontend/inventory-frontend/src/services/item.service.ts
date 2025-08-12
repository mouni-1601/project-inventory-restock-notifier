import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item, CreateItemRequest } from '../models/item.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/api/items';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getItems(filters?: { category?: string; lowStock?: boolean }): Observable<Item[]> {
    let params = new HttpParams();
    if (filters?.category) {
      params = params.set('category', filters.category);
    }
    if (filters?.lowStock) {
      params = params.set('lowStock', 'true');
    }

    return this.http.get<Item[]>(this.apiUrl, {
      headers: this.getHeaders(),
      params
    });
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }

  createItem(item: CreateItemRequest): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item, {
      headers: this.getHeaders()
    });
  }

  updateItem(id: number, item: CreateItemRequest): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}/${id}`, item, {
      headers: this.getHeaders()
    });
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }

  getLowStockItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/low-stock`, {
      headers: this.getHeaders()
    });
  }
}