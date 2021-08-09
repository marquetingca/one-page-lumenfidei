import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionComponent } from './construction/construction.component';
import { ShareModuleModule } from '../share-module/share-module.module';
import { DialogConstComponent } from './dialog-const/dialog-const.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [ConstructionComponent, DialogConstComponent],
  imports: [
    CommonModule,
    ShareModuleModule,
    MatDialogModule
  ],
  exports:[
    ConstructionComponent
  ],
  entryComponents:[DialogConstComponent]
})
export class ConstructionModule { }
