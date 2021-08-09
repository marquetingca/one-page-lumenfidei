import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


import { ShareModuleRoutingModule } from './share-module-routing.module';
import { HeaderComponent } from './header/header.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ReproductorComponent } from './reproductor/reproductor.component';


@NgModule({
  declarations: [HeaderComponent, MenuPrincipalComponent, ReproductorComponent],
  imports: [
    CommonModule,
    ShareModuleRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatIconModule
  ],
  exports:[
    HeaderComponent,
    MenuPrincipalComponent,
    ReproductorComponent
  ]
})
export class ShareModuleModule { }
