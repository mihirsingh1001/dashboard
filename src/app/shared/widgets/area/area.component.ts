import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: { }
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit() : void  {
  this.chartOptions = 
  {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Stock Market Worldwide Growth'
    },
    subtitle: {
        text: 'Source: moneycontrol.org'
    },
    xAxis: {
        categories: ['1993', '2000', '2005', '2009', '2013', '2019', '2030'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Sensex'
        },
        labels: {
            formatter: function () {
                return this.value / 1000;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
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
        name: 'US Market',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: 'Europen Market',
        data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
        name: 'American Market',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        name: 'Asian Market',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
        name: 'Australian Market',
        data: [2, 2, 2, 6, 13, 30, 46]
    },{
        name: 'African Market',
        data: [2, 2, 2, 6, 10, 20, 35]
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
