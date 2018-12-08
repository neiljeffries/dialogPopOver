import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';

export interface DialogData {
  animal: string;
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

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.configurePopOverDialog();
  }

  cancel(): void {
    this.dialogRef.close(null);
  }

  configurePopOverDialog(){
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    const rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
    matDialogConfig.position = { left: `${rect.left}px`, top: `${rect.bottom - 50}px` };
    matDialogConfig.width = '220px';
    matDialogConfig.height = '320px';
    this.dialogRef.updateSize(matDialogConfig.width, matDialogConfig.height);
    this.dialogRef.updatePosition(matDialogConfig.position);
  }

}
