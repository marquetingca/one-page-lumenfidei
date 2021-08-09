import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  reproduct = {
    url: 'https://cloudstream2034.conectarhosting.com/cp/widgets/player/single/?p=8090',
    volume: 0.5,
    msg: 'Su navegador no soporta este elemento',
    urlApp: 'https://lumenfideifm.org.ve/app/lumenfideifm.apk'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
