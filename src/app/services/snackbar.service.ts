import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorComponent } from '../components/snackbar/error.component';
import { InfoComponent } from '../components/snackbar/info.component';
import { SuccessComponent } from '../components/snackbar/success.component';
import { WarningComponent } from '../components/snackbar/warning.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackSVC: MatSnackBar) {}

  showSuccess<T>(data: T) {
    this.snackSVC.openFromComponent(SuccessComponent, { data });
  }
  showError<T>(data: T) {
    this.snackSVC.openFromComponent(ErrorComponent, { data });
  }
  showWarning<T>(data: T) {
    this.snackSVC.openFromComponent(WarningComponent, { data });
  }
  showInfo<T>(data: T) {
    this.snackSVC.openFromComponent(InfoComponent, { data });
  }
}
