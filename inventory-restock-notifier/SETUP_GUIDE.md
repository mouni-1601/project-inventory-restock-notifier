# Step-by-Step Setup Guide

## Prerequisites

1. **Install Node.js** (v16 or higher)
   - Download from https://nodejs.org/
   - Verify: `node --version` and `npm --version`

2. **Install PostgreSQL**
   - Download from https://www.postgresql.org/download/
   - Remember your postgres user password

3. **Install Angular CLI**
   ```bash
   npm install -g @angular/cli
   ```

## Step 1: Database Setup

1. **Start PostgreSQL service**
   - Windows: Start from Services or pgAdmin
   - Mac/Linux: `sudo service postgresql start`

2. **Create database**
   ```bash
   psql -U postgres
   ```
   
3. **Run the schema file**
   ```sql
   \i database/schema.sql
   ```
   
4. **Verify tables created**
   ```sql
   \c inventory_db
   \dt
   SELECT * FROM users;
   SELECT * FROM items;
   ```

## Step 2: Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update .env file** (if needed)
   - Check database credentials
   - Update JWT_SECRET

4. **Start backend server**
   ```bash
   npm run dev
   ```

5. **Test backend** (in new terminal)
   ```bash
   curl http://localhost:3000/api/health
   ```

## Step 3: Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend/inventory-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open browser**
   - Go to http://localhost:4200
   - You should see the login page

## Step 4: Test the Application

1. **Login with default credentials**
   - Email: admin@warehouse.com
   - Password: password

2. **Test features**
   - View inventory items
   - Add new item
   - Filter by category
   - Check low stock items
   - Edit/delete items

## Step 5: Run Tests

1. **Backend tests**
   ```bash
   cd backend
   npm test
   ```

2. **Frontend tests**
   ```bash
   cd frontend/inventory-frontend
   npm test
   ```

## Troubleshooting

### Database Connection Issues
- Check PostgreSQL is running
- Verify credentials in .env file
- Check database exists: `psql -U postgres -l`

### Backend Issues
- Check port 3000 is available
- Verify all dependencies installed
- Check logs for specific errors

### Frontend Issues
- Check port 4200 is available
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall

### CORS Issues
- Backend includes CORS middleware
- Check frontend API URLs match backend port

## Development Workflow

1. **Make changes to backend**
   - Server auto-restarts with nodemon
   - Check logs in terminal

2. **Make changes to frontend**
   - Browser auto-refreshes
   - Check console for errors

3. **Database changes**
   - Update schema.sql
   - Re-run database setup

## Production Deployment

1. **Build frontend**
   ```bash
   cd frontend/inventory-frontend
   npm run build
   ```

2. **Set production environment variables**
   ```bash
   NODE_ENV=production
   ```

3. **Start backend in production**
   ```bash
   cd backend
   npm start
   ```

## Next Steps

- Add more item categories
- Implement email notifications
- Add user roles and permissions
- Create reports and analytics
- Add barcode scanning
- Implement inventory forecasting