import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
declare var google : any;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  constructor() { }
  ngOnInit() {
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Visitations', { role: 'style' } ],
      ['', 30, 'color: gray; opacity: 0.8'],
      ['', 80, 'color: gray; opacity: 0.8'],
      ['', 46, 'color: gray; opacity: 0.8'],
      ['', 20, 'color: gray; opacity: 0.8'],
      ['', 34, 'color: gray; opacity: 0.8'],
      ['', 18, 'color: gray; opacity: 0.8']
    ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "Taux de chaumage/Niveau",
    width: 600,
    height: 400,
    bar: {groupWidth: "55%"},
    legend: { position: "left" }
    
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
  chart.draw(view, options);
}
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart1);
      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     47],
          ['Eat',      53]
          
        ]);

        var options = {
          title: 'Taux diplômé/Cycle',
          pieHole: 0.7,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     77],
          ['Eat',      23]
          
        ]);

        var options = {
          title: 'Taux diplômé/Cycle',
          pieHole: 0.7,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart1'));
        chart.draw(data, options);
      }
     
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['', ''],
          ["lorem ipsum ", 44],
          ["lorem ipsum", 31],
          ["lorem ipsum", 12],
          ["lorem ipsum", 10]
         
        ]);

        var options = {
          //title: 'Taux d apprenant',
          width: 900,
          legend: { position: 'none' },
          
          //chart: { title: 'Taux d apprenant'},
           //        subtitle: 'popularity by percentage' },
          bars: 'horizontal',
          color: 'gray', // Required for Material Bar Charts.
          axes: {
            x: {
              0: { side: 'top', label: 'Percentage'} // Top x-axis.
            }
          },
          bar: { groupWidth: "5%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        chart.draw(data, options);
      };


  /*  function drawMultSeries() {
          var data = new google.visualization.DataTable();
          data.addColumn('timeofday', 'Time of Day');
          data.addColumn('number', 'Motivation Level');
          data.addColumn('number', 'Energy Level');

          data.addRows([
            [{v: [8, 0, 0], f: '8 am'}, 1, .25],
            [{v: [9, 0, 0], f: '9 am'}, 2, .5],
            [{v: [10, 0, 0], f:'10 am'}, 30, 34],
            [{v: [11, 0, 0], f: '11 am'}, 98, 40],
            [{v: [12, 0, 0], f: '12 pm'}, 5, 100],
            [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
            [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
            [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
            [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
            [{v: [17, 0, 0], f: '5 pm'}, 10, 100],
          ]);

          var options = {
            title: 'Taux de Chômage / Niveau'
          };

          var chart = new google.visualization.ColumnChart(
            document.getElementById('chart_div'));

          chart.draw(data, options);
        }
        */



        
        google.charts.load('current', {'packages':['line', 'corechart']});
        google.charts.setOnLoadCallback(drawChart);

    /*  function drawChart() {

        var button = document.getElementById('change-chart');
        var chartDiv = document.getElementById('chart2_div');

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Month');
        data.addColumn('number', "Average Temperature");
        data.addColumn('number', "Average Hours of Daylight");

        data.addRows([
          [new Date(2014, 0),  -.5,  5.7],
          [new Date(2014, 1),   .4,  8.7],
          [new Date(2014, 2),   .5,   12],
          [new Date(2014, 3),  2.9, 15.3],
          [new Date(2014, 4),  6.3, 18.6],
          [new Date(2014, 5),    9, 20.9],
          [new Date(2014, 6), 10.6, 19.8],
          [new Date(2014, 7), 10.3, 16.6],
          [new Date(2014, 8),  7.4, 13.3],
          [new Date(2014, 9),  4.4,  9.9],
          [new Date(2014, 10), 1.1,  6.6],
          [new Date(2014, 11), -.2,  4.5]
        ]);

        var materialOptions = {
          chart: {
            title: 'Average Temperatures and Daylight in Iceland Throughout the Year'
          },
          width: 400,
          height: 500,
          series: {
            // Gives each series an axis name that matches the Y-axis below.
            0: {axis: 'Temps'},
            1: {axis: 'Daylight'}
          },
          axes: {
            // Adds labels to each axis; they don't have to match the axis names.

          }
        };

        var classicOptions = {
          title: 'Average Temperatures and Daylight in Iceland Throughout the Year',
          width: 900,
          height: 500,
          // Gives each series an axis that matches the vAxes number below.
          series: {
            0: {targetAxisIndex: 0},
            1: {targetAxisIndex: 1}
          },
          vAxes: {
            // Adds titles to each axis.
            0: {title: 'Temps (Celsius)'},
            1: {title: 'Daylight'}
          },
          hAxis: {
            ticks: [new Date(2014, 0), new Date(2014, 1), new Date(2014, 2), new Date(2014, 3),
                    new Date(2014, 4),  new Date(2014, 5), new Date(2014, 6), new Date(2014, 7),
                    new Date(2014, 8), new Date(2014, 9), new Date(2014, 10), new Date(2014, 11)
                   ]
          },
          vAxis: {
            viewWindow: {
              max: 30
            }
          }
        };

        function drawMaterialChart() {
          var materialChart = new google.charts.Line(chartDiv);
          materialChart.draw(data, materialOptions);
          button.innerText = 'Change to Classic';
          button.onclick = drawClassicChart;
        }

        function drawClassicChart() {
          var classicChart = new google.visualization.LineChart(chartDiv);
          classicChart.draw(data, classicOptions);
          button.innerText = 'Change to Material';
          button.onclick = drawMaterialChart;
        }

        drawMaterialChart();

      }*/

  }

}
