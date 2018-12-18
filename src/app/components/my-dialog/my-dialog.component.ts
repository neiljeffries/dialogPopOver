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
    matDialogConfig.width = '220px';
    matDialogConfig.height = '320px';

    if (this.data.anchorMode === 'element') {
      const rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
      matDialogConfig.position = { left: `${rect.left}px`, top: `${rect.bottom - 50}px` };
    }

    if (this.data.anchorMode === 'mouse') {
      matDialogConfig.position = { left: `${this.data.mouseCoords[0]}px`, top: `${this.data.mouseCoords[1]}px` };
    }

    this.dialogRef.updateSize(matDialogConfig.width, matDialogConfig.height);
    this.dialogRef.updatePosition(matDialogConfig.position);
  }

  clickedCancel(): void {
    this.dialogRef.close(null);
  }

}
