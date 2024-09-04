import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.css'],
  imports: [
    ReactiveFormsModule,
    CommonModule],
  standalone: true
})
export class InterviewFormComponent {
  interviewForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.interviewForm = this.fb.group({
      basicDetails: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        address: ['', Validators.required],
      }),
      advancedDetails: this.fb.group({
        experience: ['', Validators.required],
        skills: ['', Validators.required],
        expectedSalary: ['', Validators.required],
        availability: ['', Validators.required],
      })
    });
  }

  onSubmit() {
    if (this.interviewForm.valid) {
      console.log(this.interviewForm.value);
    } else {
      alert('Please fill out all required fields');
    }
  }
}
