# Employee Management UI

An Angular 19 application for managing employee data with a modern, responsive interface.

## Features

- View employee list in a styled table
- Real-time error handling and loading states
- Type-safe HTTP communication with backend API
- Environment-based configuration
- Responsive design
- Server-side rendering support

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Angular CLI 19.x

## Getting Started

### 1. Install dependencies

```bash
cd employee/EmployeeUI
npm install
```

### 2. Configure the API URL

The application uses environment files for configuration:

**Development** (`src/environments/environment.ts`):
```typescript
export const environment = {
    production: false,
    apiUrl: 'http://localhost:5114/api'
};
```

**Production** (`src/environments/environment.prod.ts`):
```typescript
export const environment = {
    production: true,
    apiUrl: 'https://your-production-api.com/api'
};
```

### 3. Start the development server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run watch` - Build and watch for changes

## Project Structure

```
EmployeeUI/
├── src/
│   ├── app/
│   │   ├── interfaces/
│   │   │   └── employee.ts          # Employee interface
│   │   ├── services/
│   │   │   └── employee.service.ts  # API service
│   │   ├── app.component.ts         # Root component
│   │   ├── app.config.ts            # App configuration
│   │   ├── app.routes.ts            # Routing configuration
│   │   ├── employee.component.ts    # Employee list component
│   │   ├── employee.component.html  # Employee list template
│   │   └── employee.component.scss  # Employee list styles
│   ├── environments/
│   │   ├── environment.ts           # Development config
│   │   └── environment.prod.ts      # Production config
│   ├── index.html
│   ├── main.ts
│   └── styles.css                   # Global styles
├── angular.json                     # Angular CLI configuration
├── package.json
└── tsconfig.json                    # TypeScript configuration
```

## Features Explained

### Employee Service

The `EmployeeService` handles all HTTP communication with the backend API:

- `getEmployees()` - Fetch all employees
- `getEmployee(id)` - Fetch single employee
- `addEmployee(employee)` - Create new employee
- `updateEmployee(id, employee)` - Update existing employee
- `deleteEmployee(id)` - Delete employee

All methods include error handling with user-friendly error messages.

### Employee Component

Displays the employee list with:
- Loading indicator during data fetch
- Error message display
- Formatted salary display (currency pipe)
- Hover effects on table rows
- Responsive table design

## Styling

The application uses SCSS for styling with:
- Modern gradient header
- Hover effects
- Responsive design
- Clean, professional look

### Color Scheme

- Primary gradient: Purple to violet (`#667eea` to `#764ba2`)
- Loading state: Blue (`#e3f2fd`)
- Error state: Red (`#ffebee`)

## API Integration

The application expects the backend API to be running on the configured `apiUrl`. Make sure the EmployeeAPI is running before starting the UI.

### CORS Requirements

The backend API must allow requests from `http://localhost:4200` during development.

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

To build for a specific environment:

```bash
ng build --configuration production
```

## Server-Side Rendering

The application includes SSR support. To run with SSR:

```bash
npm run serve:ssr:EmployeeUI
```

## Future Enhancements

Potential features to add:
- Employee create/edit forms
- Delete confirmation dialog
- Search and filter functionality
- Pagination
- Sorting columns
- Export to CSV/Excel

## Troubleshooting

### API Connection Error

If you see connection errors:
1. Verify the backend API is running
2. Check the API URL in `environment.ts`
3. Ensure CORS is properly configured in the backend

### Build Errors

If you encounter build errors:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Clear Angular cache: `ng cache clean`

## License

This project is for educational purposes.
