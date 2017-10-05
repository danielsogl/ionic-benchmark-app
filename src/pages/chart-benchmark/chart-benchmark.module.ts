import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartBenchmarkPage } from './chart-benchmark';

@NgModule({
  declarations: [
    ChartBenchmarkPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartBenchmarkPage),
  ],
})
export class ChartBenchmarkPageModule {}
