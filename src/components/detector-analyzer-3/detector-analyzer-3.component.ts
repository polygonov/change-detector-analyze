import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-detector-analyzer-3',
  templateUrl: './detector-analyzer-3.component.html',
  styleUrls: ['./detector-analyzer-3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectorAnalyzer3Component implements OnInit, AfterViewInit {

  asyncNumeric$ = new BehaviorSubject<number>(0);
  signalNumeric = signal(0);

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setInterval(() => this.asyncNumeric$.next(this.asyncNumeric$.value + 1), 1000);
    setInterval(() => this.signalNumeric.update(v => v + 1), 2000);
  }

}
