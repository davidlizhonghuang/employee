import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError, firstValueFrom} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Employee} from '../interfaces/employee';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class EmployeeService{

    private apiUrl = `${environment.apiUrl}/employee`;

    constructor(private http: HttpClient) {}

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.apiUrl)
            .pipe(catchError(this.handleError));
    }

    getEmployee(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.apiUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    addEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.apiUrl, employee)
            .pipe(catchError(this.handleError));
    }

    updateEmployee(id: number, employee: Employee): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, employee)
            .pipe(catchError(this.handleError));
    }

    deleteEmployee(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An error occurred';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        } else {
            errorMessage = `Server returned code ${error.status}: ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
    }

}

