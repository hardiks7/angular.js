import { Component } from '@angular/core';
import { ProfileImageService } from '../profile-image.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ProfileComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuItems = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Products', link: '/products' },
    { name: 'Blog', link: '/blog' },
    { name: 'Careers', link: '/careers' },
    { name: 'Contact', link: '/contact' },
    { name: 'Help', link: '/help' },
  ];

  profileImageUrl: string = 'assets/default-profile.png';

  constructor(private p: ProfileImageService) {
    this.p.profileImageUrl$.subscribe(
      (url) => (this.profileImageUrl = url)
    );
  }

  showSearchBar: boolean = false;

  toggleSearchBar(event: Event, item: string): void {
    event.preventDefault();
    const itemsToShowSearchBar = ['Home', 'Services', 'Blog', 'Contact'];
    this.showSearchBar = itemsToShowSearchBar.includes(item);
  }
}