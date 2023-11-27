import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'devio-food-dialog-sucesso',
  templateUrl: './dialog-sucesso.component.html',
  styleUrls: ['./dialog-sucesso.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule
  ]
})
export class DialogSucessoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogSucessoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}


  closeDialog(): void {
    this.dialogRef.close();
  }


}
