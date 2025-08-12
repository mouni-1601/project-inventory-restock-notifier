# Frontend Development Prompts

## What I Built in Frontend (Angular)

### 1. **Create Angular Project Structure**
```
Create Angular frontend with:
- Login component with form validation
- Dashboard component for inventory management
- Authentication service with JWT
- Item service for API calls
- TypeScript models for User and Item
- Routing between login and dashboard
```

### 2. **Build Login Component**
```
Create login component with:
- Reactive forms with email and password validation
- Email format validation using Validators.email
- Password required validation
- Error message display for invalid credentials
- JWT token storage in localStorage
- Redirect to dashboard after successful login
- Loading state during authentication
```

### 3. **Build Dashboard Component**
```
Create dashboard component with:
- Welcome message showing current user
- Low stock alert box showing items needing restock
- Filterable table with category dropdown
- "Show Low Stock Only" checkbox filter
- Add new item form with validation
- Edit existing item functionality
- Delete item with confirmation
- Real-time stock level indicators (Low Stock vs In Stock)
- Logout functionality
```

### 4. **Create Authentication Service**
```
Build auth service with:
- login() method that calls backend API
- register() method for new users
- logout() method that clears tokens
- currentUser BehaviorSubject for state management
- Token storage and retrieval from localStorage
- isAuthenticated() check for route protection
- HTTP error handling
```

### 5. **Create Item Service**
```
Build item service with:
- getItems() with optional filters (category, lowStock)
- createItem() for adding new inventory
- updateItem() for editing existing items
- deleteItem() for removing items
- getLowStockItems() for restock notifications
- JWT token headers for authenticated requests
- HTTP error handling
```

### 6. **Create TypeScript Models**
```
Define interfaces for:
- User model (id, username, email, phone)
- Item model (id, name, description, quantity, threshold, category)
- LoginRequest and RegisterRequest interfaces
- AuthResponse interface with token and user
- CreateItemRequest interface
```

### 7. **Build App Module with Routing**
```
Configure Angular module with:
- Import ReactiveFormsModule for form validation
- Import FormsModule for template-driven forms
- Import HttpClientModule for API calls
- Setup routing: login page and dashboard page
- Declare all components (App, Login, Dashboard)
- Configure services as providers
```

### 8. **Style the Application**
```
Create global CSS with:
- Form styling with validation states
- Button styles (primary, secondary, danger)
- Table styling with hover effects
- Alert boxes for notifications
- Low stock highlighting with red background
- Responsive grid layout for forms
- Professional color scheme
```

### 9. **Add Low Stock Alert Feature**
```
Implement restock notifications:
- Display alert box when items are below threshold
- Show specific message: "Packing Tape: Current stock 8 units < Minimum threshold 10 units"
- Visual indicators in table rows
- Count of total items needing restock
- Red highlighting for low stock items
```

### 10. **Add Form Validations**
```
Implement comprehensive validation:
- Email format validation in login
- Required field validation for all forms
- Number validation for quantity and threshold
- Real-time validation feedback
- Error message display
- Disable submit button when form invalid
```

### 11. **Add Filtering and Search**
```
Build filtering functionality:
- Category dropdown filter
- Low stock only checkbox
- Dynamic table updates based on filters
- Clear filter options
- Combine multiple filters
```

### 12. **Add CRUD Operations**
```
Implement full inventory management:
- Add new items with form validation
- Edit existing items with pre-filled form
- Delete items with confirmation dialog
- Real-time table updates after operations
- Success/error message handling
```

### 13. **Add Testing**
```
Create unit tests for:
- Authentication service login/logout
- Login component form validation
- HTTP service calls with mocked responses
- Component initialization and user interactions
- Error handling scenarios
```

### 14. **Configure Build and Development**
```
Setup Angular configuration:
- Development server on port 4200
- Build configuration for production
- Test configuration with Karma
- TypeScript compilation settings
- Asset management for images and styles
```

### 15. **Add Error Handling**
```
Implement error management:
- HTTP error intercepting
- User-friendly error messages
- Network failure handling
- Invalid token handling
- Form submission error display
```

## Key Frontend Features Achieved

✅ **Angular Reactive Forms** with validation  
✅ **JWT Authentication** with token management  
✅ **HTTP API Integration** with error handling  
✅ **Real-time Low Stock Alerts** (Packing Tape example)  
✅ **Filterable Data Tables** with multiple filters  
✅ **CRUD Operations** for inventory management  
✅ **Form Validation** for email, phone, and all inputs  
✅ **Responsive UI** with professional styling  
✅ **Unit Testing** with Jasmine/Karma  
✅ **Route Protection** with authentication guards  

## Technical Implementation

- **Framework**: Angular 16 with TypeScript
- **Forms**: Reactive Forms with Validators
- **HTTP**: HttpClient with JWT headers
- **State**: BehaviorSubject for user state
- **Routing**: Angular Router with guards
- **Testing**: Jasmine/Karma unit tests
- **Styling**: CSS with responsive design