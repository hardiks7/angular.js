import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule], standalone: true
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  // Store the original data
  originalData: any = [
    { id: 1, name: 'Nice', contact: '720818918', email: '1admin@gmail.com' },
    { id: 2, name: 'Bombasto', contact: '755538918', email: '2admin@gmail.com' },
    { id: 3, name: 'Celeritas', contact: '2454189128', email: '3admin@gmail.com' },
    { id: 4, name: 'Magneta', contact: '5656518918', email: '4admin@gmail.com' },
    { id: 5, name: 'RubberMan', contact: '535218918', email: '5admin@gmail.com' },
  ];

  // Initially set data to originalData
  data: any = [...this.originalData];

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  goback() {
    this.router.navigate(['']);
  }
  hero_form() {
    this.router.navigate(['/hero_form']);
  }

  searchData(event: any) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();

    if (searchTerm === '') {
      // Reset the data to the original list if input is empty
      this.data = [...this.originalData];
    } else {
      // Filter data based on the search term, checking all fields
      this.data = this.originalData.filter((item: any) => {
        return Object.keys(item).some(key =>
          String(item[key]).toLowerCase().includes(searchTerm)
        );
      });
    }
  }
}
