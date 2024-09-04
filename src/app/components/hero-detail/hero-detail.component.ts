import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import { MessageService } from '../../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  selectedHero?: Hero;

  heroes: any = [];

  constructor(private heroService: HeroService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): any {
    this.heroService.getHeroes().subscribe((heroes: any) => this.heroes = heroes);
  }

  btn() {
    this.router.navigate(['/app-dashboard'])
  }


}