import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/snackbar/error.component';
import { InfoComponent } from './components/snackbar/info.component';
import { SuccessComponent } from './components/snackbar/success.component';
import { WarningComponent } from './components/snackbar/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    ErrorComponent,
    WarningComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    MatMenuModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
