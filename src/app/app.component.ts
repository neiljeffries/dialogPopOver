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
  email: string;
  name: string;
  selectedMode = 'mouse';
  modes: string[] = ['mouse', 'element'];

  constructor(public dialog: MatDialog) { }

  /*
    Below we are passing the clicked element as "trigger: target" to the dialog
    component so it can know the correct anchor location to open the dialog.
  */
  showDialog(event: MouseEvent): void {

    this.dialog.closeAll();
    const mouseCoords = [event.x, event.y];
    const target = new ElementRef(event.currentTarget);

    const dialogRef = this.dialog.open(MyDialogComponent, {
      data: {
        anchorMode: this.selectedMode, // or anchor: element
        mouseCoords: mouseCoords,
        email: this.email,
        name: this.name,
        trigger: target
      },
      disableClose: true,
      hasBackdrop: false
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.email = res;
    });
  }


}
