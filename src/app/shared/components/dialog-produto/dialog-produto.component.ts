import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'devio-food-dialog-produto',
  templateUrl: './dialog-produto.component.html',
  styleUrls: ['./dialog-produto.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule]
})
export class DialogProdutoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

  closeDialog() : void {
    this.dialogRef.close();
  }

}
