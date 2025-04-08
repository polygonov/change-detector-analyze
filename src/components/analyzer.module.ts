import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectorAnalyzer1Component } from './detector-analyzer-1/detector-analyzer-1.component';
import { AnalyzerComponent } from './analyzer/analyzer.component';
import { ButtonModule } from 'primeng/button';
import { DetectorAnalyzer2Component } from './detector-analyzer-2/detector-analyzer-2.component';
import { DetectorAnalyzer3Component } from './detector-analyzer-3/detector-analyzer-3.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [
    DetectorAnalyzer1Component,
    DetectorAnalyzer2Component,
    DetectorAnalyzer3Component,
    AnalyzerComponent,
  ],
  exports: [
    AnalyzerComponent,
  ]
})
export class AnalyzerModule { }
