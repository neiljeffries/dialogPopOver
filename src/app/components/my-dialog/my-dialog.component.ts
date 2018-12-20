import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
export interface DialogData {
  anchorMode: string;
  mouseCoords: Array<number>;
  email: string;
  name: string;
  trigger: ElementRef;
}
@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {

  private readonly triggerElementRef: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.triggerElementRef = data.trigger;
  }


  ngOnInit() {
    this.configurePopOverDialog();
  }


  configurePopOverDialog(): void {

    const matDialogConfig: MatDialogConfig = new MatDialogConfig();

    switch (this.data.anchorMode) {
      case 'element':
        const rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
        matDialogConfig.position = { left: `${rect.left}px`, top: `${rect.bottom - 50}px` }; break;
      case 'mouse':
        matDialogConfig.position = { left: `${this.data.mouseCoords[0]}px`, top: `${this.data.mouseCoords[1]}px` }; break;
    }

    this.dialogRef.updateSize('220px', '320px');
    this.dialogRef.updatePosition(matDialogConfig.position);
  }


  clickedCancel(): void {
    this.dialogRef.close(null);
  }

}
