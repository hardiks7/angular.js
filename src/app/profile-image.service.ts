import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileImageService {
  private storageKey = 'profileImageUrl';
  private profileImageUrlSubject = new BehaviorSubject<string>(this.getProfileImageUrl());
  public profileImageUrl$ = this.profileImageUrlSubject.asObservable();

  setProfileImageUrl(url: string): void {
    localStorage.setItem(this.storageKey, url);
    this.profileImageUrlSubject.next(url);
  }

  getProfileImageUrl(): string {
    return localStorage.getItem(this.storageKey) || 'assets/default-profile.png';
  }

  clearProfileImageUrl(): void {
    localStorage.removeItem(this.storageKey);
    this.profileImageUrlSubject.next('assets/default-profile.png');
  }
}
