import { Component } from '@angular/core';
import { AnalyzerModule } from '../components/analyzer.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [AnalyzerModule],
})
export class AppComponent {
  title = 'change-detector-analyze';
}
