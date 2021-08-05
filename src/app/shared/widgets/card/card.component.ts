import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;

  Highcharts = Highcharts;
  chartOptions = { };

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = 
    {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          margin: [2, 2, 2, 2],
          height: 60   
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      tooltip: {
          split: true,
          outside: true
      },
      legend: {
         enabled: false 
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
         data: [0, 4, 10, 12, 16, 70, 70, 71, 74, 78, 50, 40, 30, 23, 25, 400, 453, 415, 419, 229, 180, 128, 134, 70, 139, 145, 148, 50, 200, 177, 90, 71, 78, 80, 120, 180, 10]
      }]
  };

  HC_exporting(Highcharts);  

    setTimeout(() =>{
      window.dispatchEvent(  
          new Event('resize')
      )
    }, 300);
   
  }

}
