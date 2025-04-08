import { Component } from '@angular/core';
import { IReference } from '../interfaces/reference';

@Component({
  selector: 'app-analyzer',
  templateUrl: './analyzer.component.html',
  styleUrls: ['./analyzer.component.scss'],
})
export class AnalyzerComponent {

  numeric = 0;

  reference: IReference = {
    text: "Ссылочный",
    numeric: 0,
  }

  constructor() { }

  incrementNumeric() {
    this.numeric++;
  }

  incrementReference() {
    this.reference.numeric++;
  }

}
