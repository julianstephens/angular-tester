import { Component, OnInit } from '@angular/core';
import { SnackbarService } from './services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public snackSVC: SnackbarService) {}

  ngOnInit(): void {
    this.snackSVC.showError<string>(
      'oops got an error blah alsdf laskdgjasl;d'
    );
  }

  success() {
    this.snackSVC.showSuccess<string>('got success');
  }
  info() {
    this.snackSVC.showInfo<string>('got info');
  }
  warning() {
    this.snackSVC.showWarning<string>('got warning');
  }
  error() {
    this.snackSVC.showError<string>('got error');
  }
}

// this.observable.subscribe(
//   (res) => {
//     // do stuff
//     this.toastSVC.showSuccess('your action completed successfully');

//     if (dueDate < 2 days)
//       this.toastSVC.showInfo('fyi due date coming up');
//   },
//   (err) => {
//     // do stuff
//     this.toastSVC.showError("your action wasn't able to complete");
//   }
// );
