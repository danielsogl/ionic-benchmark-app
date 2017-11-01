import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: "page-chart-benchmark",
  templateUrl: "chart-benchmark.html"
})
export class ChartBenchmarkPage {

  private chartData: any[] = [];
  public ready: boolean = false;

  constructor() {
    for (let i = 0; i < 1000; i++) {
      const number = Math.floor(Math.random() * 100);
      this.chartData[i] = number;
    }
    this.ready = true;
  }

  render() {
    HighCharts.chart('container', {
      chart: {
        type: 'line'
      },
      series: [
        {
          name: 'Data',
          data: this.chartData
        }
      ]
    });
  }
}
