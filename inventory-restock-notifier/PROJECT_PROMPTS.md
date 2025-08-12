# Exact Prompts for Inventory Restock Notifier Project

## Initial Project Request Prompt

```
Inventory Restock Notifier 
Domain: Warehouse 
Objective: Notify staff when item stock drops below a threshold.

Tech Stack
 - Frontend: Angular 
- Backend: Node.js (Express) 
- Database: PostgreSQL 
- Authentication: JWT-based login 
- Logging: Console or Winston 
- Testing: Jasmine/Karma (Angular), Jest (Node.js)

Key Features 
- Login / Logout (JWT-based) 
- CRUD operations for main entities 
- Filterable tables for viewing data 
- Graceful error handling & UI messages 
- Basic logging of actions and failures
 - Form validation for inputs like email and phone

Evaluation Criteria
 - Angular forms and validations 
- API integration with error handling
 - Backend route logic and DB queries
 - JWT-based auth with route protection 
- Unit testing on frontend and backend

i dont know about this project create workspace and step by step guide me
```

## Follow-up Prompts (in order)

### 1. Database Queries Request
```
give required queries file
```

### 2. Frontend Start Issue
```
inventory-frontend@1.0.0 start
> ng serve

? Would you like to share pseudonymous usage data about this project with 
the Angular Team
at Google under Google's Privacy Policy at 
https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.io/analytics. 
Yes

Thank you for sharing pseudonymous usage data. Should you change your mind, the following
command will disable this feature entirely:

    ng analytics disable

Global setting: enabled
Local setting: enabled
Effective status: enabled
Error: Schema validation failed with the following errors:
  Data path "" must have required property 'browserTarget'.
C:\Users\MOAMBATI\Desktop\project-casestudy\inventory-restock-notifier\frontend\inventory-frontend\node_modules\@angular-devkit\architect\node_modules\rxjs\dist\cjs\internal\util\reportUnhandledError.js:13
            throw err;
            ^

SchemaValidationException [Error]: Schema validation failed with the following errors:
  Data path "" must have required property 'browserTarget'.
    at C:\Users\MOAMBATI\Desktop\project-casestudy\inventory-restock-notifier\frontend\inventory-frontend\node_modules\@angular-devkit\architect\src\architect.js:40:27 {
  errors: [
    {
      instancePath: '',
      schemaPath: '#/required',
      keyword: 'required',
      params: { missingProperty: 'browserTarget' },
      message: "must have required property 'browserTarget'"
    }
  ]
}

Node.js v22.5.1
fix that error
```

### 3. Backend Port Issue
```
[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/app.js`
node:events:498
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::3000
    at Server.setupListenHandle [as _listen2] (node:net:1902:16)
    at listenInCluster (node:net:1959:12)
    at Server.listen (node:net:2061:7)
    at Function.listen (C:\Users\MOAMBATI\Desktop\project-casestudy\inventory-restock-notifier\backend\node_modules\express\lib\application.js:635:24)
    at Object.<anonymous> (C:\Users\MOAMBATI\Desktop\project-casestudy\inventory-restock-notifier\backend\src\app.js:32:5)
    at Module._compile (node:internal/modules/cjs/loader:1504:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1588:10)
    at Module.load (node:internal/modules/cjs/loader:1282:32)
    at Module._load (node:internal/modules/cjs/loader:1098:12)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
Emitted 'error' event on Server instance at:
    at emitErrorNT (node:net:1938:8)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  code: 'EADDRINUSE',
  errno: -4091,
  syscall: 'listen',
  address: '::',
  port: 3000
}

Node.js v22.5.1
[nodemon] app crashed - waiting for file changes before starting..
```

### 4. Frontend Start Question
```
how can i start frontend
```

### 5. Specific Example Request
```
Let's say you have an item called "Packing Tape":

Current stock: 8 units
Minimum threshold: 10 units
Since 8 < 10, the system will trigger a notification to alert staff that this item needs to be restocked.
this is the example i want in my code exactly edit the files
```

### 6. Backend Connection Issue
```
http://localhost:3000 for backend Cannot GET /
```

### 7. Login Issue
```
Login
Email:
admin@warehouse.com
Password:
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
Login
Invalid credentials
```

### 8. Backend Response Issue
```
Im not getting the response it was showing cannot GET?
```

### 9. Page Not Loading Issue
```
it was not running showing cant reach this page
```

### 10. Edit Button Issue
```
Inventory Dashboard
Welcome, adminLogout

Electronics
Show Low Stock Only
Add Item
⚠️ Low Stock Alert
6 items need restocking!

USB Cable: Current stock 2 units < Minimum threshold 15 units
Office Chair: Current stock 3 units < Minimum threshold 5 units
Laptop Dell XPS: Current stock 5 units < Minimum threshold 10 units
Desk Lamp: Current stock 8 units < Minimum threshold 10 units
Adaptor: Current stock 8 units < Minimum threshold 10 units
Printer Paper: Current stock 15 units < Minimum threshold 20 units
Name	Category	Quantity	Threshold	Status	Actions
Adaptor	Electronics	8	10	Low Stock	EditDelete
Laptop Dell XPS	Electronics	5	10	Low Stock	EditDelete
Im unable to edit the edit button in browser
```

### 11. Final Request
```
give me exact prompts for this project from starting itself
```

## Summary of Issues Resolved

1. **Project Setup** - Created complete workspace structure
2. **Database Queries** - Provided SQL files with all required queries
3. **Angular Configuration** - Fixed browserTarget and missing config files
4. **Port Conflicts** - Resolved EADDRINUSE error
5. **Frontend Startup** - Fixed Angular development server issues
6. **Specific Example** - Implemented Packing Tape low stock scenario
7. **Backend Routes** - Added root route to fix Cannot GET /
8. **Authentication** - Ensured proper JWT login flow
9. **Edit Functionality** - Implemented working edit form for items

## Key Commands Used

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend  
cd frontend/inventory-frontend
npm install
npm start

# Database
psql -U postgres
\i database/setup.sql

# Kill port process
netstat -ano | findstr :3000
taskkill /PID [PID] /F
```

This sequence of prompts shows the complete development journey from initial request to fully functional application.