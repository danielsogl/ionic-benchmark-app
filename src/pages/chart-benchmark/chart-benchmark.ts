import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-chart-benchmark',
  templateUrl: 'chart-benchmark.html',
})
export class ChartBenchmarkPage {

  @ViewChild('chartCanvas') chartCanvas;

  private chartData: any[] = [];
  private chartLabel: any[] = [];
  public ready: boolean = false;

  constructor() {
    for (let i = 0; i < 500; i++) {
      const number = Math.floor(Math.random() * 100);
      this.chartData[i] = number;
      this.chartLabel[i] = number.toString();
    }
    this.ready = true;
  }

  render() {
    this.chartCanvas = new Chart(this.chartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.chartLabel,
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.chartData,
            spanGaps: false,
          }
        ]
      }
    });
  }

  update() {

  }

}
