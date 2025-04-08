import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-detector-analyzer-2',
  templateUrl: './detector-analyzer-2.component.html',
  styleUrls: ['./detector-analyzer-2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetectorAnalyzer2Component implements OnInit, AfterViewInit {

  private readonly _changeDetector: ChangeDetectorRef = inject(ChangeDetectorRef);

  numeric: number = 0;

  constructor() {
    setTimeout(() => {
      this.numeric++;
    }, 100);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.numeric++
  }

  incrementNumeric() {
    this.numeric++;
  }

  detectChanges() {
    this._changeDetector.detectChanges();
  }

}
