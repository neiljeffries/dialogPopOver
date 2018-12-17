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
  mouseAnchor = 'mouse';

  constructor(public dialog: MatDialog) { }

  /*
    Below we are passing the clicked element as "trigger: target" to the dialog
    component so it can know the correct anchor location to open the dialog.
  */
  showDialog(event: MouseEvent): void {
    this.dialog.closeAll();
    const xy = [event.x, event.y];
    const target = new ElementRef(event.currentTarget);
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data: {
        anchor: this.mouseAnchor, // or anchor: element
        coords: xy,
        email: this.email,
        name: this.name,
        trigger: target
      },
      disableClose: false,
      hasBackdrop: false
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.email = res;
    });
  }

  toggle() {
    if (this.mouseAnchor === 'mouse') {
      this.mouseAnchor = 'element';
    } else {
      this.mouseAnchor = 'mouse';
    }
  }

}
