# Backend Development Prompts

## What I Built in Backend (Node.js + Express + PostgreSQL)

### 1. **Create Express Server Setup**
```
Build Express server with:
- CORS middleware for frontend communication
- JSON body parser for API requests
- Route mounting for /api/auth and /api/items
- Error handling middleware
- Server startup on port 3000
- Health check endpoint
```

### 2. **Setup Database Configuration**
```
Create PostgreSQL connection with:
- Connection pool using pg library
- Environment variables for database credentials
- Database host, port, name, user, password configuration
- Connection error handling
```

### 3. **Build JWT Authentication System**
```
Implement JWT authentication with:
- User registration with bcrypt password hashing
- User login with credential validation
- JWT token generation with expiration
- Authentication middleware for protected routes
- Token verification and user extraction
- 401/403 error responses for invalid tokens
```

### 4. **Create User Model and Controller**
```
Build user management with:
- User.create() method for registration
- User.findByEmail() for login validation
- User.findById() for user lookup
- Password hashing with bcryptjs
- SQL queries with parameterized statements
- Error handling for duplicate users
```

### 5. **Build Item Model with CRUD Operations**
```
Create item management with:
- Item.create() for adding new inventory
- Item.findAll() with filtering by category and low stock
- Item.findById() for single item retrieval
- Item.update() for editing existing items
- Item.delete() for removing items
- Item.getLowStockItems() for restock notifications
```

### 6. **Implement Low Stock Detection Logic**
```
Build restock notification system with:
- SQL query: SELECT * FROM items WHERE quantity <= threshold
- getLowStockItems() method in Item model
- /api/items/low-stock endpoint
- Real-time stock level monitoring
- Automatic threshold comparison
```

### 7. **Create Authentication Routes**
```
Build auth endpoints:
- POST /api/auth/register - User registration
- POST /api/auth/login - User authentication
- Input validation for email and password
- Error responses for invalid credentials
- Success responses with JWT tokens
```

### 8. **Create Protected Item Routes**
```
Build inventory endpoints with JWT protection:
- GET /api/items - Get all items with filters
- POST /api/items - Create new item
- GET /api/items/:id - Get specific item
- PUT /api/items/:id - Update item
- DELETE /api/items/:id - Delete item
- GET /api/items/low-stock - Get items needing restock
```

### 9. **Add Request Filtering and Querying**
```
Implement advanced querying:
- Category filter: ?category=Electronics
- Low stock filter: ?lowStock=true
- Combined filters with SQL WHERE clauses
- Parameterized queries for security
- Dynamic query building
```

### 10. **Setup Winston Logging System**
```
Implement comprehensive logging with:
- Winston logger configuration
- File logging (error.log, combined.log)
- Console logging for development
- Timestamp and JSON formatting
- Error level logging
- Action logging for user operations
```

### 11. **Add Environment Configuration**
```
Setup environment management with:
- .env file for sensitive data
- Database connection parameters
- JWT secret key
- Port configuration
- Restock threshold setting
- dotenv package integration
```

### 12. **Build Error Handling System**
```
Implement error management with:
- Global error handling middleware
- Database connection error handling
- Validation error responses
- 404 responses for not found resources
- 500 responses for server errors
- Structured error messages
```

### 13. **Create Database Models with Security**
```
Build secure database operations:
- Parameterized SQL queries to prevent injection
- Password hashing before storage
- Input sanitization
- Database connection pooling
- Transaction handling for data integrity
```

### 14. **Add API Testing Suite**
```
Create comprehensive tests with:
- Jest testing framework
- Supertest for HTTP testing
- Authentication endpoint tests
- Item CRUD operation tests
- Error scenario testing
- Mock database responses
```

### 15. **Implement Package Management**
```
Setup Node.js dependencies:
- Express for web framework
- pg for PostgreSQL connection
- bcryptjs for password hashing
- jsonwebtoken for JWT handling
- cors for cross-origin requests
- winston for logging
- dotenv for environment variables
```

## Key Backend Features Achieved

✅ **JWT-based Authentication** with secure token handling  
✅ **PostgreSQL Database** with connection pooling  
✅ **RESTful API Design** with proper HTTP methods  
✅ **Password Security** with bcrypt hashing  
✅ **Route Protection** with JWT middleware  
✅ **Low Stock Detection** with SQL threshold queries  
✅ **Comprehensive Logging** with Winston  
✅ **Error Handling** with structured responses  
✅ **Input Validation** and SQL injection prevention  
✅ **Unit Testing** with Jest and Supertest  
✅ **Environment Configuration** with .env  
✅ **CORS Support** for frontend integration  

## Core Backend Logic

### **Low Stock Detection**
```sql
SELECT * FROM items WHERE quantity <= threshold ORDER BY quantity ASC
```

### **JWT Protection**
```javascript
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied' });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};
```

### **Password Security**
```javascript
const hashedPassword = await bcrypt.hash(password, 10);
const isMatch = await bcrypt.compare(password, user.password);
```

## Technical Implementation

- **Framework**: Express.js with Node.js
- **Database**: PostgreSQL with pg library
- **Authentication**: JWT with bcrypt hashing
- **Logging**: Winston with file and console output
- **Testing**: Jest with Supertest
- **Security**: Parameterized queries, CORS, input validation