import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StorageBenchmarkPage } from './storage-benchmark';

@NgModule({
  declarations: [
    StorageBenchmarkPage,
  ],
  imports: [
    IonicPageModule.forChild(StorageBenchmarkPage),
  ],
})
export class StorageBenchmarkPageModule {}
