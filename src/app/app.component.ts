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
  Passing the clicked element as "trigger: target" to the dialog here
  so the dialog component can determine the correct
  location to open on the screen.
*/
onShowDialog(evt: MouseEvent): void {
  const target = new ElementRef(evt.currentTarget); 
  const dialogRef = this.dialog.open(MyDialogComponent, {
    data: { trigger: target, name: this.name, animal: this.animal },
    hasBackdrop: false
  });
  dialogRef.afterClosed().subscribe( res => {
    console.log(res);
    this.animal = res;
  });
}
}
