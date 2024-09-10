import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from './notification.service'; 
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RefreshDialogComponent } from './refresh-dialog/refresh-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private notificationService: NotificationService, 
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.notificationService.notification$.subscribe((message: string) => {
      this.openRefreshDialog(message);
    });
  }

  openRefreshDialog(message: string): void {
    const dialogRef = this.dialog.open(RefreshDialogComponent, {
      data: { message: message },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'refresh') {
        window.location.reload(); 
      }
    });
  }
}
