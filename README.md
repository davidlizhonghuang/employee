# Employee Management System

A full-stack employee management application built with ASP.NET Core and Angular.

## Project Structure

```
employee/
├── EmployeeAPI/          # Backend API (.NET Core 10.0)
└── EmployeeUI/           # Frontend Application (Angular 19)
```

## Quick Start

### Prerequisites

- .NET 10.0 SDK
- Node.js 18.x or later
- Angular CLI 19.x

### Setup Instructions

#### 1. Start the Backend API

```bash
cd EmployeeAPI
dotnet restore
dotnet ef database update
dotnet run
```

The API will be available at `http://localhost:5114`

#### 2. Start the Frontend

```bash
cd EmployeeUI
npm install
npm start
```

The UI will be available at `http://localhost:4200`

## Features

### Backend (EmployeeAPI)
- RESTful API with full CRUD operations
- Entity Framework Core with SQLite
- Data validation and error handling
- CORS support
- Swagger documentation
- Global exception middleware

### Frontend (EmployeeUI)
- Modern Angular 19 application
- Type-safe HTTP communication
- Responsive table design
- Loading and error states
- Environment-based configuration

## Architecture

### Backend Stack
- ASP.NET Core 10.0
- Entity Framework Core 9.0
- SQLite Database
- Swagger/OpenAPI

### Frontend Stack
- Angular 19
- TypeScript 5.7
- RxJS 7.8
- Angular Material 19 (ready to use)
- Server-side rendering support

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employee` | Get all employees |
| GET | `/api/employee/{id}` | Get employee by ID |
| POST | `/api/employee` | Create new employee |
| PUT | `/api/employee/{id}` | Update employee |
| DELETE | `/api/employee/{id}` | Delete employee |

## Data Model

```typescript
Employee {
  id: number;
  name: string;        // Required, max 100 chars
  department: string;  // Required, max 50 chars
  position: string;    // Required, max 50 chars
  salary: number;      // Must be positive
}
```

## Recent Improvements

### Backend
- ✅ Added CORS configuration
- ✅ Implemented model validation
- ✅ Added global exception handling
- ✅ Moved connection string to configuration
- ✅ Fixed package name typo
- ✅ Removed unused template code
- ✅ Added comprehensive documentation

### Frontend
- ✅ Fixed critical string interpolation bugs
- ✅ Migrated from axios to Angular HttpClient
- ✅ Added proper error handling
- ✅ Implemented loading states
- ✅ Added environment configuration
- ✅ Improved table styling with gradients
- ✅ Added table headers
- ✅ Formatted currency display
- ✅ Fixed routing configuration
- ✅ Cleaned up boilerplate code

## Development

### Backend Development

```bash
cd EmployeeAPI

# Run migrations
dotnet ef migrations add MigrationName
dotnet ef database update

# Build
dotnet build

# Run
dotnet run

# Access Swagger
# Navigate to: https://localhost:5115/swagger
```

### Frontend Development

```bash
cd EmployeeUI

# Install dependencies
npm install

# Development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Configuration

### Backend Configuration

Edit `EmployeeAPI/appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=app.db"
  },
  "AllowedHosts": "*"
}
```

### Frontend Configuration

Edit `EmployeeUI/src/environments/environment.ts`:

```typescript
export const environment = {
    production: false,
    apiUrl: 'http://localhost:5114/api'
};
```

## Troubleshooting

### CORS Errors
If you encounter CORS errors:
1. Ensure the backend is running
2. Check that CORS policy includes `http://localhost:4200`
3. Restart both applications

### Database Issues
If you have database issues:
```bash
cd EmployeeAPI
dotnet ef database drop
dotnet ef database update
```

### Port Conflicts
If ports are in use:
- Backend: Edit `Properties/launchSettings.json`
- Frontend: Run `ng serve --port 4201`

## Future Enhancements

Potential improvements:
- [ ] Add create/edit employee forms
- [ ] Implement delete confirmation
- [ ] Add search and filtering
- [ ] Implement pagination
- [ ] Add column sorting
- [ ] Export functionality (CSV/Excel)
- [ ] Add authentication and authorization
- [ ] Implement role-based access control
- [ ] Add audit logging
- [ ] Unit and integration tests

## Documentation

- [Backend README](EmployeeAPI/README.md)
- [Frontend README](EmployeeUI/README.md)

## License

This project is for educational purposes.
