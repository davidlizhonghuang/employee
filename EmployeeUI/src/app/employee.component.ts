import {Component, OnInit } from '@angular/core';
import {NgFor, NgIf, CurrencyPipe} from '@angular/common';
import {EmployeeService} from './services/employee.service';
import {Employee} from './interfaces/employee';
import {EmployeeFormComponent} from './employee-form/employee-form.component';

@Component({
    selector: 'app-employee',
    imports: [NgFor, NgIf, CurrencyPipe, EmployeeFormComponent],
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{
    employees: Employee[] = [];
    isLoading = false;
    error: string | null = null;
    showForm = false;
    isEditMode = false;
    selectedEmployee: Employee | null = null;
    successMessage: string | null = null;

    constructor(private employeeService: EmployeeService){}

    ngOnInit(){
        this.loadEmployees();
    }

    loadEmployees(): void {
        this.isLoading = true;
        this.error = null;
        this.employeeService.getEmployees().subscribe({
            next: (data) => {
                this.employees = data;
                this.isLoading = false;
            },
            error: (err) => {
                this.error = err.message;
                this.isLoading = false;
            }
        });
    }

    openCreateForm(): void {
        this.showForm = true;
        this.isEditMode = false;
        this.selectedEmployee = null;
        this.error = null;
        this.successMessage = null;
    }

    openEditForm(employee: Employee): void {
        this.showForm = true;
        this.isEditMode = true;
        this.selectedEmployee = employee;
        this.error = null;
        this.successMessage = null;
    }

    closeForm(): void {
        this.showForm = false;
        this.isEditMode = false;
        this.selectedEmployee = null;
    }

    onFormSubmit(employee: Employee): void {
        if (this.isEditMode && employee.id) {
            this.updateEmployee(employee.id, employee);
        } else {
            this.createEmployee(employee);
        }
    }

    createEmployee(employee: Employee): void {
        this.isLoading = true;
        this.employeeService.addEmployee(employee).subscribe({
            next: (newEmployee) => {
                this.employees.push(newEmployee);
                this.successMessage = 'Employee created successfully!';
                this.closeForm();
                this.isLoading = false;
                this.clearMessageAfterDelay();
            },
            error: (err) => {
                this.error = err.message;
                this.isLoading = false;
            }
        });
    }

    updateEmployee(id: number, employee: Employee): void {
        this.isLoading = true;
        this.employeeService.updateEmployee(id, employee).subscribe({
            next: () => {
                const index = this.employees.findIndex(e => e.id === id);
                if (index !== -1) {
                    this.employees[index] = { ...employee, id };
                }
                this.successMessage = 'Employee updated successfully!';
                this.closeForm();
                this.isLoading = false;
                this.clearMessageAfterDelay();
            },
            error: (err) => {
                this.error = err.message;
                this.isLoading = false;
            }
        });
    }

    deleteEmployee(id: number): void {
        if (confirm('Are you sure you want to delete this employee?')) {
            this.isLoading = true;
            this.employeeService.deleteEmployee(id).subscribe({
                next: () => {
                    this.employees = this.employees.filter(e => e.id !== id);
                    this.successMessage = 'Employee deleted successfully!';
                    this.isLoading = false;
                    this.clearMessageAfterDelay();
                },
                error: (err) => {
                    this.error = err.message;
                    this.isLoading = false;
                }
            });
        }
    }

    clearMessageAfterDelay(): void {
        setTimeout(() => {
            this.successMessage = null;
        }, 3000);
    }
}