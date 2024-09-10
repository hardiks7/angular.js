import { Component } from '@angular/core';
import { ProfileImageService } from '../profile-image.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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
}
