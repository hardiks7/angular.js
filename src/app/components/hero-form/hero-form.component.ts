import { Component } from '@angular/core';

import { Hero } from '../../hero';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
  imports: [CommonModule,ReactiveFormsModule,FormsModule],standalone:true
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  constructor(private router: Router) { }


  submitted = false;

  onSubmit() { this.submitted = true; }

  goback() {
    this.router.navigate(['/'])
  }

}