// about.component.ts
import { Component } from '@angular/core';
import { ProfileImageService } from '../profile-image.service';
import { HeaderComponent } from '../header/header.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, ProfileComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  profileImageUrl: string = 'assets/default-profile.png';

  constructor(private profileImageService: ProfileImageService) {
    this.profileImageService.profileImageUrl$.subscribe(
      (url) => (this.profileImageUrl = url)
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imageUrl = e.target.result;
        this.profileImageService.setProfileImageUrl(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  }

  deleteImage(): void {
    const defaultImage = 'assets/default-profile.png';
    this.profileImageService.setProfileImageUrl(defaultImage);
  }
}
