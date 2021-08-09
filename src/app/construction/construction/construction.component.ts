import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConstComponent } from '../dialog-const/dialog-const.component';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogConstComponent,{
      width: '50%',
      data:{
        title: 'Remodelando nuestra Plataforma',
        description: `En estos momentos nos encontramos actualizando nuestra plataforma
        para brindar una mejor experincia a nuestros oyentes.
        `,
        aux: `¡Escuchanos en vivo mientras nosotros trabajamos!`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Close Dialog');
    });
  }
  ngOnInit(): any{
    this.openDialog();
  }

}
