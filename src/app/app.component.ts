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

  showDialog(event: MouseEvent): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data: {
        anchorMode: this.selectedMode,
        mouseCoords: [event.x, event.y],
        email: this.email,
        name: this.name,
        trigger: new ElementRef(event.currentTarget) // <--- clicked element
      },
      disableClose: true,
      hasBackdrop: false
    });
    dialogRef.afterClosed().subscribe(res => {
      this.email = res;
    });
  }


}
