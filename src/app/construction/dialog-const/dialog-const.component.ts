import { Component, OnInit, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-const',
  templateUrl: './dialog-const.component.html',
  styleUrls: ['./dialog-const.component.css']
})
export class DialogConstComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogConstComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
