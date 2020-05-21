import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'model-cifra',
  templateUrl: './model-cifra.component.html',
  styleUrls: ['./model-cifra.component.scss'],
})
export class ModelCifraComponent implements OnInit {

 @Input() item:any

   constructor() { }

  ngOnInit() {}

}
