# Employee Management API

A RESTful API built with ASP.NET Core 10.0 for managing employee data.

## Features

- Full CRUD operations for employee management
- SQLite database with Entity Framework Core
- Input validation
- Global exception handling
- CORS support for Angular frontend
- Swagger/OpenAPI documentation
- XML documentation for all endpoints

## Prerequisites

- .NET 10.0 SDK or later
- Visual Studio 2022 or VS Code (optional)

## Getting Started

### 1. Clone the repository

```bash
cd employee/EmployeeAPI
```

### 2. Configure the database

The application uses SQLite by default. The connection string is configured in `appsettings.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Data Source=app.db"
}
```

### 3. Run database migrations

```bash
dotnet ef database update
```

### 4. Run the application

```bash
dotnet run
```

The API will be available at:
- HTTPS: `https://localhost:5115`
- HTTP: `http://localhost:5114`

### 5. Access Swagger UI

Navigate to `https://localhost:5115/swagger` to view and test the API endpoints.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employee` | Get all employees |
| GET | `/api/employee/{id}` | Get employee by ID |
| POST | `/api/employee` | Create new employee |
| PUT | `/api/employee/{id}` | Update employee |
| DELETE | `/api/employee/{id}` | Delete employee |

## Employee Model

```csharp
{
  "id": 0,
  "name": "string",
  "department": "string",
  "position": "string",
  "salary": 0
}
```

### Validation Rules

- **Name**: Required, max 100 characters
- **Department**: Required, max 50 characters
- **Position**: Required, max 50 characters
- **Salary**: Must be a positive number

## Configuration

### CORS

The API is configured to allow requests from `http://localhost:4200` (Angular development server). To modify CORS settings, edit `Program.cs`:

```csharp
policy.WithOrigins("http://localhost:4200")
```

### Database

To switch from SQLite to SQL Server:

1. Update the connection string in `appsettings.json`
2. Change the DbContext configuration in `Program.cs`:

```csharp
options.UseSqlServer(connectionString)
```

## Project Structure

```
EmployeeAPI/
├── Controllers/
│   └── EmployeeController.cs    # API endpoints
├── Data/
│   └── AppDbContext.cs           # Database context
├── Middleware/
│   └── GlobalExceptionMiddleware.cs  # Error handling
├── Migrations/                    # EF Core migrations
├── Models/
│   └── Employee.cs               # Employee entity
├── Program.cs                    # Application entry point
└── appsettings.json              # Configuration
```

## Error Handling

The API includes global exception handling middleware that returns standardized error responses:

```json
{
  "statusCode": 500,
  "message": "An error occurred while processing your request.",
  "detailed": "Exception details"
}
```

## Development

### Add a migration

```bash
dotnet ef migrations add MigrationName
```

### Update database

```bash
dotnet ef database update
```

### Build

```bash
dotnet build
```

### Run tests

```bash
dotnet test
```

## License

This project is for educational purposes.
