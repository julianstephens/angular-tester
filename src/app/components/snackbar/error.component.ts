import { Component, inject, OnInit } from '@angular/core';
import {
    MatSnackBarRef,
    MAT_SNACK_BAR_DATA
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-error',
  template: `
    <div class="snackbar error">
      <p class="title">Error:</p> 
      <p class="data">{{data}}</p> 
      <button class="btn" (click)="close()">x</button> 
    </div>
  `,
  styleUrls: ['./snackbar.scss']
})
export class ErrorComponent implements OnInit {
  snackbar = inject(MatSnackBarRef);
  data = inject(MAT_SNACK_BAR_DATA);

  ngOnInit(): void {
    console.log(this.data);
  }

  close() {
    this.snackbar.dismiss()
  }
}
