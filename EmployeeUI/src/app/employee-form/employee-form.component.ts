import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Employee } from '../interfaces/employee';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee: Employee | null = null;
  @Input() isEdit: boolean = false;
  @Output() formSubmit = new EventEmitter<Employee>();
  @Output() formCancel = new EventEmitter<void>();

  employeeForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    if (this.employee && this.isEdit) {
      this.populateForm(this.employee);
    }
  }

  initForm(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      department: ['', [Validators.required, Validators.maxLength(50)]],
      position: ['', [Validators.required, Validators.maxLength(50)]],
      salary: ['', [Validators.required, Validators.min(0)]]
    });
  }

  populateForm(employee: Employee): void {
    this.employeeForm.patchValue({
      name: employee.name,
      department: employee.department,
      position: employee.position,
      salary: employee.salary
    });
  }

  get f() {
    return this.employeeForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.employeeForm.invalid) {
      return;
    }

    const employeeData: Employee = {
      ...this.employeeForm.value,
      id: this.employee?.id
    };

    this.formSubmit.emit(employeeData);
  }

  onCancel(): void {
    this.formCancel.emit();
  }
}
