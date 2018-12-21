import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-tivalidacion',
  templateUrl: './index-tivalidacion.component.html',
  styles: []
})
export class IndexTivalidacionComponent implements OnInit {
  numer: number;
  constructor() { }

  ngOnInit() {
    this.numer = 3;
  }

}
