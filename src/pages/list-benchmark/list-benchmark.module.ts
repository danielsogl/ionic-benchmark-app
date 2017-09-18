import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListBenchmarkPage } from './list-benchmark';

@NgModule({
  declarations: [
    ListBenchmarkPage,
  ],
  imports: [
    IonicPageModule.forChild(ListBenchmarkPage),
  ],
})
export class ListBenchmarkPageModule {}
