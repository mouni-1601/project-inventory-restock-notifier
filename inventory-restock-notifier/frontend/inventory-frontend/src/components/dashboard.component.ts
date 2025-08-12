import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { AuthService } from '../services/auth.service';
import { Item } from '../models/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard">
      <header class="header">
        <h1>Inventory Dashboard</h1>
        <div class="user-info">
          <span>Welcome, {{ currentUser?.username }}</span>
          <button (click)="logout()" class="btn btn-secondary">Logout</button>
        </div>
      </header>

      <div class="filters">
        <select [(ngModel)]="selectedCategory" (change)="applyFilters()" class="form-control">
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Supplies">Supplies</option>
        </select>
        
        <label class="checkbox-label">
          <input type="checkbox" [(ngModel)]="showLowStockOnly" (change)="applyFilters()">
          Show Low Stock Only
        </label>

        <button (click)="showAddForm = true" class="btn btn-primary">Add Item</button>
      </div>

      <div class="low-stock-alert" *ngIf="lowStockItems.length > 0">
        <h3>⚠️ Low Stock Alert</h3>
        <p>{{ lowStockItems.length }} items need restocking!</p>
        <div class="example-alert" *ngFor="let item of lowStockItems">
          <strong>{{ item.name }}</strong>: Current stock {{ item.quantity }} units < Minimum threshold {{ item.threshold }} units
        </div>
      </div>

      <div class="add-item-form" *ngIf="showAddForm">
        <h3>Add New Item</h3>
        <form (ngSubmit)="addItem()">
          <input [(ngModel)]="newItem.name" name="name" placeholder="Item Name" required class="form-control">
          <input [(ngModel)]="newItem.description" name="description" placeholder="Description" class="form-control">
          <input [(ngModel)]="newItem.quantity" name="quantity" type="number" placeholder="Quantity" required class="form-control">
          <input [(ngModel)]="newItem.threshold" name="threshold" type="number" placeholder="Threshold" required class="form-control">
          <input [(ngModel)]="newItem.category" name="category" placeholder="Category" required class="form-control">
          
          <button type="submit" class="btn btn-primary">Add Item</button>
          <button type="button" (click)="cancelAdd()" class="btn btn-secondary">Cancel</button>
        </form>
      </div>

      <div class="edit-item-form" *ngIf="showEditForm && editingItem">
        <h3>Edit Item</h3>
        <form (ngSubmit)="updateItem()">
          <input [(ngModel)]="editingItem.name" name="editName" placeholder="Item Name" required class="form-control">
          <input [(ngModel)]="editingItem.description" name="editDescription" placeholder="Description" class="form-control">
          <input [(ngModel)]="editingItem.quantity" name="editQuantity" type="number" placeholder="Quantity" required class="form-control">
          <input [(ngModel)]="editingItem.threshold" name="editThreshold" type="number" placeholder="Threshold" required class="form-control">
          <input [(ngModel)]="editingItem.category" name="editCategory" placeholder="Category" required class="form-control">
          
          <button type="submit" class="btn btn-primary">Update Item</button>
          <button type="button" (click)="cancelEdit()" class="btn btn-secondary">Cancel</button>
        </form>
      </div>

      <div class="items-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Threshold</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of filteredItems" [class.low-stock]="item.quantity <= item.threshold">
              <td>{{ item.name }}</td>
              <td>{{ item.category }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.threshold }}</td>
              <td>
                <span [class]="item.quantity <= item.threshold ? 'status-low' : 'status-ok'">
                  {{ item.quantity <= item.threshold ? 'Low Stock' : 'In Stock' }}
                </span>
              </td>
              <td>
                <button (click)="editItem(item)" class="btn btn-sm btn-primary">Edit</button>
                <button (click)="deleteItem(item.id)" class="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 20px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
    }
    .filters {
      display: flex;
      gap: 15px;
      margin-bottom: 20px;
      align-items: center;
    }
    .form-control {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .low-stock-alert {
      background-color: #fff3cd;
      border: 1px solid #ffeaa7;
      padding: 15px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    .example-alert {
      background-color: #f8d7da;
      border: 1px solid #f5c6cb;
      padding: 8px;
      margin: 5px 0;
      border-radius: 3px;
      font-size: 0.9em;
    }
    .add-item-form, .edit-item-form {
      background-color: #f8f9fa;
      padding: 20px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    .add-item-form form, .edit-item-form form {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 10px;
    }
    .edit-item-form {
      background-color: #e7f3ff;
      border: 1px solid #b3d9ff;
    }
    .items-table table {
      width: 100%;
      border-collapse: collapse;
    }
    .items-table th,
    .items-table td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    .items-table th {
      background-color: #f8f9fa;
      font-weight: bold;
    }
    .low-stock {
      background-color: #fff5f5;
    }
    .status-low {
      color: #dc3545;
      font-weight: bold;
    }
    .status-ok {
      color: #28a745;
    }
    .btn {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-right: 5px;
    }
    .btn-primary { background-color: #007bff; color: white; }
    .btn-secondary { background-color: #6c757d; color: white; }
    .btn-danger { background-color: #dc3545; color: white; }
    .btn-sm { padding: 4px 8px; font-size: 0.875em; }
  `]
})
export class DashboardComponent implements OnInit {
  items: Item[] = [];
  filteredItems: Item[] = [];
  lowStockItems: Item[] = [];
  selectedCategory = '';
  showLowStockOnly = false;
  showAddForm = false;
  showEditForm = false;
  editingItem: Item | null = null;
  currentUser = this.authService.currentUserValue;

  newItem = {
    name: '',
    description: '',
    quantity: 0,
    threshold: 0,
    category: ''
  };

  constructor(
    private itemService: ItemService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadItems();
    this.loadLowStockItems();
  }

  loadItems(): void {
    this.itemService.getItems().subscribe({
      next: (items) => {
        this.items = items;
        this.applyFilters();
      },
      error: (error) => {
        console.error('Error loading items:', error);
      }
    });
  }

  loadLowStockItems(): void {
    this.itemService.getLowStockItems().subscribe({
      next: (items) => {
        this.lowStockItems = items;
      },
      error: (error) => {
        console.error('Error loading low stock items:', error);
      }
    });
  }

  applyFilters(): void {
    this.filteredItems = this.items.filter(item => {
      const categoryMatch = !this.selectedCategory || item.category === this.selectedCategory;
      const stockMatch = !this.showLowStockOnly || item.quantity <= item.threshold;
      return categoryMatch && stockMatch;
    });
  }

  addItem(): void {
    this.itemService.createItem(this.newItem).subscribe({
      next: () => {
        this.loadItems();
        this.loadLowStockItems();
        this.cancelAdd();
      },
      error: (error) => {
        console.error('Error adding item:', error);
      }
    });
  }

  editItem(item: Item): void {
    this.editingItem = { ...item };
    this.showEditForm = true;
  }

  updateItem(): void {
    if (this.editingItem) {
      this.itemService.updateItem(this.editingItem.id, {
        name: this.editingItem.name,
        description: this.editingItem.description,
        quantity: this.editingItem.quantity,
        threshold: this.editingItem.threshold,
        category: this.editingItem.category
      }).subscribe({
        next: () => {
          this.loadItems();
          this.loadLowStockItems();
          this.cancelEdit();
        },
        error: (error) => {
          console.error('Error updating item:', error);
        }
      });
    }
  }

  cancelEdit(): void {
    this.showEditForm = false;
    this.editingItem = null;
  }

  deleteItem(id: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.itemService.deleteItem(id).subscribe({
        next: () => {
          this.loadItems();
          this.loadLowStockItems();
        },
        error: (error) => {
          console.error('Error deleting item:', error);
        }
      });
    }
  }

  cancelAdd(): void {
    this.showAddForm = false;
    this.newItem = {
      name: '',
      description: '',
      quantity: 0,
      threshold: 0,
      category: ''
    };
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}