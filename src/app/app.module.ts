import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSliderModule, MatDialogModule, MatFormFieldModule,
  MatButtonModule, MatInputModule, MatRippleModule, MatRadioModule } from '@angular/material';
import { MyDialogComponent } from './components/my-dialog/my-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatRadioModule
  ],
  providers: [],
  entryComponents: [MyDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
