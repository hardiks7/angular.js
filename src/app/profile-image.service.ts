import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProfileImageService {
    private ImageUrlSubject = new BehaviorSubject<string>('assets/default-profile.png');
    profileImageUrl$ = this.ImageUrlSubject.asObservable();

    setProfileImageUrl(url: string): void {
        this.ImageUrlSubject.next(url);
    }
}