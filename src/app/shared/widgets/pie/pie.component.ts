import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = { };

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = 
    {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Stock Exchange in World '
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'New York Stock Exchange (NYSE), US',
              y: 61.41,
              sliced: true,
              selected: true
          }, {
              name: 'NASDAQ, United States',
              y: 11.84
          }, {
              name: ' National Stock Exchange (NSE), India',
              y: 10.85
          }, {
              name: ' LSE Group, UK and Italy',
              y: 4.67
          }, {
              name: 'Toronto Stock Exchange, Canada',
              y: 4.18
          }, {
              name: 'Shenzhen Stock Exchange (SZSE), China',
              y: 1.64
          }, {
              name: ' Japan Stock Exchange (JPX)',
              y: 1.6
          }, {
              name: 'Honk Kong Stock Exchange (SEHK)',
              y: 1.2
          }, {
              name: 'Other',
              y: 2.61
          }]
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
