import { Component, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from './components/my-dialog/my-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unbelievableApp';
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

/*
  Below we are passing the clicked element as "trigger: target" to the dialog
  component so it can know the correct anchor location to open the dialog.
*/
showDialog(evt: MouseEvent): void {
  const target = new ElementRef(evt.currentTarget);
  const dialogRef = this.dialog.open(MyDialogComponent, {
    data: {
      trigger: target,
      name: this.name,
      animal: this.animal
    },
    disableClose: false,
    hasBackdrop: false
  });
  dialogRef.afterClosed().subscribe( res => {
    console.log(res);
    this.animal = res;
  });
}
}
