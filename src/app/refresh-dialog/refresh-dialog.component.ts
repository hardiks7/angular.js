import { Component, Inject } from '@angular/core';  
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-refresh-dialog',
  standalone: true,
  templateUrl: './refresh-dialog.component.html',
  styleUrls: ['./refresh-dialog.component.css']  
})
export class RefreshDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RefreshDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string } 
  ) { }

  onRefresh(): void {
    this.dialogRef.close('refresh');  
  }
}
