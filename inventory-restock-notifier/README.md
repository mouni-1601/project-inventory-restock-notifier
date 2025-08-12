# Inventory Restock Notifier

A warehouse inventory management system that notifies staff when item stock drops below a threshold.

## Tech Stack

- **Frontend**: Angular with TypeScript
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **Authentication**: JWT-based login
- **Logging**: Winston
- **Testing**: Jest (Backend), Jasmine/Karma (Frontend)

## Features

- JWT-based authentication (login/logout)
- CRUD operations for inventory items
- Filterable tables for viewing data
- Low stock notifications and alerts
- Form validation for inputs
- Error handling with user-friendly messages
- Comprehensive logging

## Project Structure

```
inventory-restock-notifier/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── config/
│   │   └── tests/
│   └── package.json
├── frontend/
│   └── inventory-frontend/
│       ├── src/
│       │   ├── app/
│       │   ├── components/
│       │   ├── services/
│       │   └── models/
│       └── package.json
├── database/
│   └── schema.sql
└── README.md
```

## Setup Instructions

### 1. Database Setup

1. Install PostgreSQL
2. Create database and run schema:
```bash
psql -U postgres
\i database/schema.sql
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend will run on http://localhost:3000

### 3. Frontend Setup

```bash
cd frontend/inventory-frontend
npm install
npm start
```

The frontend will run on http://localhost:4200

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Items (Protected Routes)
- `GET /api/items` - Get all items (with filters)
- `POST /api/items` - Create new item
- `GET /api/items/:id` - Get specific item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item
- `GET /api/items/low-stock` - Get low stock items

## Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend/inventory-frontend
npm test
```

## Environment Variables

Create `.env` file in backend directory:

```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=inventory_db
DB_USER=postgres
DB_PASSWORD=password
JWT_SECRET=your_jwt_secret_key_here
RESTOCK_THRESHOLD=10
```

## Default Login

- Email: rajesh@warehouse.com
- Password: password
- Phone: 9876543210

## Key Features Implemented

✅ Angular forms with validation  
✅ API integration with error handling  
✅ Backend route logic and DB queries  
✅ JWT-based auth with route protection  
✅ Unit testing on frontend and backend  
✅ CRUD operations for main entities  
✅ Filterable tables for viewing data  
✅ Graceful error handling & UI messages  
✅ Basic logging of actions and failures  
✅ Form validation for inputs like email and phone  

## Usage

1. Start the database, backend, and frontend
2. Navigate to http://localhost:4200
3. Login with default credentials
4. View inventory items and low stock alerts
5. Add, edit, or delete items
6. Use filters to find specific items
7. Monitor low stock notifications