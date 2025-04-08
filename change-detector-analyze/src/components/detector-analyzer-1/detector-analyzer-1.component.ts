import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { IReference } from '../interfaces/reference';

@Component({
  selector: 'app-detector-analyzer-1',
  templateUrl: './detector-analyzer-1.component.html',
  styleUrls: ['./detector-analyzer-1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetectorAnalyzer1Component {

  private readonly _changeDetector: ChangeDetectorRef = inject(ChangeDetectorRef);

  constructor() { }

  @Input() 
  numeric: number = 0;

  @Input()
  reference: IReference | null = null;


  detectChanges() {
    this._changeDetector.detectChanges();
  }

}
