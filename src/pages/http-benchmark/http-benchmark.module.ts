import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpBenchmarkPage } from './http-benchmark';

@NgModule({
  declarations: [
    HttpBenchmarkPage,
  ],
  imports: [
    IonicPageModule.forChild(HttpBenchmarkPage),
  ],
})
export class HttpBenchmarkPageModule {}
