import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare var Plotly: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  // title = 'plotlychart';
  title = 'Ui';
  data: any;
  graphType: any = 'line';
  subGraphType: any = 'line';
  subGraphOptions:any=[{
    value: 'line',
    title: 'Line Chart'
  },
  {
    value: 'line_2',
    title: 'Line and Bar Chart'
  },
  {
    value: 'line_3',
    title: 'Line and 2 Bars Chart'
  },
  {
    value: 'line_4',
    title: '2 Lines and 1 Bar Chart'
  },
  {
    value: 'line_5',
    title: 'Line and Scatter Plot'
  },
  {
    value: 'line_6',
    title: 'Line and Scatter Styling'
  },
  {
    value: 'line_7',
    title: 'Line Shape Options for Interpolation'
  },
  // {
  //   value: 'line_8',
  //   title: 'Creating Tangent Lines with Shapes'
  // },
  {
    value: 'line_9',
    title: 'Simple Annotation'
  },
  {
    value: 'line_10',
    title: 'Multiple Annotations'
  },
  {
    value: 'line_11',
    title: 'Subplot Annotations'
  }];
  @ViewChild('plotlyChart') plotlyChart: ElementRef | any;

  constructor() { }

  ngAfterViewInit(): void {
    // Example data for a line chart
    // const data = [{
    //   x: [1, 2, 3, 4, 5],
    //   y: [1, 3, 2, 4, 3],
    //   type: 'scatter',
    //   mode: 'lines+points',
    //   marker: { color: 'blue' }
    // }];

    // // Layout options for the chart
    // const layout = {
    //   title: 'Plotly Line Chart'
    // };
    // // Configuration options for Plotly
    // const config = {
    //   // Hide "Produced with Plotly.js" text
    //   displaylogo: false
    // };
    // // Render the chart using Plotly
    // Plotly.newPlot(this.plotlyChart.nativeElement, data, layout, config);
    this.drawChart();
  }

  setSubGraph(){
    console.log('graphType--', this.graphType)
    if(this.graphType == "line"){
      this.subGraphOptions = [{
        value: 'line',
        title: 'Line Chart'
      },
      {
        value: 'line_2',
        title: 'Line and Bar Chart'
      },
      {
        value: 'line_3',
        title: 'Line and 2 Bars Chart'
      },
      {
        value: 'line_4',
        title: '2 Lines and 1 Bar Chart'
      },
      {
        value: 'line_5',
        title: 'Line and Scatter Plot'
      },
      {
        value: 'line_6',
        title: 'Line and Scatter Styling'
      },
      {
        value: 'line_7',
        title: 'Line Shape Options for Interpolation'
      },
      // {
      //   value: 'line_8',
      //   title: 'Creating Tangent Lines with Shapes'
      // },
      {
        value: 'line_9',
        title: 'Simple Annotation'
      },
      {
        value: 'line_10',
        title: 'Multiple Annotations'
      },
      {
        value: 'line_11',
        title: 'Subplot Annotations'
      }]
    }
    else if(this.graphType == "bar"){
      this.subGraphOptions = [{
        value: 'bar',
        title: 'Bar Chart'
      },
      {
        value: 'grouped_bar',
        title: 'Grouped Bar Chart'
      },
      {
        value: 'stacked_bar',
        title: 'Stacked Bar Chart'
      }]      
    }
    else if(this.graphType == "pie"){
      this.subGraphOptions = [{
        value: 'pie',
        title: 'Pie Chart'
      },
      {
        value: 'donut',
        title: 'Donut Chart'
      },
      {
        value: 'pie_2',
        title: 'Automatically Adjust Margins'
      },
      {
        value: 'pie_3',
        title: 'Control Text Orientation Inside Pie Chart Sectors'
      },
      {
        value: 'pie_4',
        title: 'Pie Chart Subplots'
      }]      
    }
    else if(this.graphType == "scatter"){
      this.subGraphOptions = [{
        value: 'scatter',
        title: 'Scatter Chart'
      },
      {
        value: 'scatter_plot_with_color',
        title: 'Scatter Plot with a Color Dimension'
      },
      {
        value: 'grouped_scatter',
        title: 'Grouped Scatter Plot'
      }]      
    } else if(this.graphType == "bubble"){
      this.subGraphOptions = [{
        value: 'bubble',
        title: 'Bubble Chart'
      },
      {
        value: 'bubble_2',
        title: 'Bubble Size Scaling on Charts'
      },
      {
        value: 'bubble_3',
        title: 'Marker Size, Color, and Symbol as an Array'
      }]      
    } else if(this.graphType == "filled"){
      this.subGraphOptions = [{
        value: 'filled',
        title: 'Filled Area'
      },
      {
        value: 'filled_2',
        title: 'Overlaid Area Chart Without Boundary Lines'
      },
      {
        value: 'filled_3',
        title: 'Stacked Area Chart'
      }]      
    } else if(this.graphType == "horizontal_bar"){
      this.subGraphOptions = [{
        value: 'horizontal_bar',
        title: 'Horizontal'
      },
      {
        value: 'horizontal_bar_2',
        title: 'Colored Bar Chart'
      },
      {
        value: 'horizontal_bar_3',
        title: 'Bar Chart with Line Plot'
      }]      
    } else if(this.graphType == "sunburst"){
      this.subGraphOptions = [{
        value: 'sunburst',
        title: 'Sunburst'
      }]      
    } else if(this.graphType == "point_cloud"){
      this.subGraphOptions = [{
        value: 'point_cloud',
        title: 'Point Cloud'
      }]      
    } else if(this.graphType == "dot"){
      this.subGraphOptions = [{
        value: 'dot',
        title: 'Dot Plots Chart'
      }]      
    }
    this.subGraphType = this.subGraphOptions[0].value
    this.drawChart();
  }

  drawChart(){
    console.log('graphType--', this.graphType)
    //*********** Bar Graph ************//
    if(this.subGraphType == "bar"){
      let data = [
        {
          x: ['giraffes', 'orangutans', 'monkeys'],
          y: [20, 14, 23],
          type: 'bar',
          color: 'rgb(31,119,180)',
        }
      ];
      // Layout options for the chart
      const layout = {
        title: 'Plotly Bar Chart',
        font: { "family": "Comic Sans MS" }
      };
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);
    } else if(this.subGraphType == "pie"){
      let data = [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
      }];      
      var layout = {
        height: 400,
        width: 500,
        title: 'Plotly Pie Chart'
      };
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);
    } 
    //*********** Line Graph ************//
    else if (this.subGraphType == "line") {
      // Example data for a line chart
      const data = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 3, 2, 4, 3],
        type: 'scatter',
        mode: 'lines+points',
        marker: { color: 'blue' }
      }];
      // Layout options for the chart
      const layout = {
        title: 'Plotly Line Chart'
      };
      // Configuration options for Plotly
      const config = {
        // Hide "Produced with Plotly.js" text
        displaylogo: false
      };
      // Render the chart using Plotly
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout, config);
    } 
    //*********** Scatter Graph ************//
    else if (this.subGraphType == "scatter") {
      var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'markers',
        type: 'scatter'
      };      
      var trace2 = {
        x: [2, 3, 4, 5],
        y: [16, 5, 11, 9],
        mode: 'lines',
        type: 'scatter'
      };      
      var trace3 = {
        x: [1, 2, 3, 4],
        y: [12, 9, 15, 12],
        mode: 'lines+markers',
        type: 'scatter'
      };      
      var data = [trace1, trace2, trace3];
      // Layout options for the chart
      const layout = {
        title: 'Plotly Scatter Chart'
      };
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);      
    } 
    //*********** Bubble Graph ************//
    else if(this.subGraphType == "bubble") {
      let trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 11, 12, 13],
        mode: 'markers',
        marker: {
          size: [40, 60, 80, 100]
        }
      };      
      let data = [trace1];      
      let layout = {
        title: 'Plotly Bubble Chart',
        showlegend: false,
        height: 600,
        width: 600
      };      
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);      
    }
    //*********** Filled Area Chart Graph ************//
    else if(this.subGraphType == "filled") {
      let trace1 = {
        x: [1, 2, 3, 4],
        y: [0, 2, 3, 5],
        fill: 'tozeroy',
        type: 'scatter'
      };
      
      let trace2 = {
        x: [1, 2, 3, 4],
        y: [3, 5, 1, 7],
        fill: 'tonexty',
        type: 'scatter'
      };
      let data = [trace1, trace2];
      let layout = {
        title: 'Plotly Filled Area Chart'
      }
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);
    }
    //*********** Horizontal Bar Chart Graph ************//
    else if(this.subGraphType == "horizontal_bar") {
      let data = [{
        type: 'bar',
        x: [20, 14, 23],
        y: ['giraffes', 'orangutans', 'monkeys'],
        orientation: 'h'
      }];
      let layout = {
        title: 'Horizontal Bar Chart'
      }
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);      
    }
    //*********** Sunburst Chart Graph ************//
    else if(this.subGraphType == "sunburst") {
      let data = [{
        type: "sunburst",
        labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
        parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
        values:  [10, 14, 12, 10, 2, 6, 6, 4, 4],
        outsidetextfont: {size: 20, color: "#377eb8"},
        leaf: {opacity: 0.4},
        marker: {line: {width: 2}},
      }];
      
      let layout = {
        margin: {l: 0, r: 0, b: 0, t: 0},
        width: 500,
        height: 500,
        title: 'Sunburst Chart'
      };
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);      
    }
    //*********** Point Cloud Chart Graph ************//
    else if(this.subGraphType == "point_cloud") {
      let xy = new Float32Array([1,2,3,4,5,6,0,4]);
      let data = [{ xy: xy,  type: 'pointcloud' }];
      let layout = { title: 'Point Cloud Chart' };
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);
    }

    //*********** Dot Plots Chart Graph ************//
    else if(this.subGraphType == "dot") {
      var country = ['Switzerland (2011)', 'Chile (2013)', 'Japan (2014)', 'United States (2012)', 'Slovenia (2014)', 'Canada (2011)', 'Poland (2010)', 'Estonia (2015)', 'Luxembourg (2013)', 'Portugal (2011)'];
      var votingPop = [40, 45.7, 52, 53.6, 54.1, 54.2, 54.5, 54.7, 55.1, 56.6];
      var regVoters = [49.1, 42, 52.7, 84.3, 51.7, 61.1, 55.3, 64.2, 91.1, 58.9];
      let trace1 = {
        type: 'scatter',
        x: votingPop,
        y: country,
        mode: 'markers',
        name: 'Percent of estimated voting age population',
        marker: {
          color: 'rgba(156, 165, 196, 0.95)',
          line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
          },
          symbol: 'circle',
          size: 16
        }
      };
      let trace2 = {
        x: regVoters,
        y: country,
        mode: 'markers',
        name: 'Percent of estimated registered voters',
        marker: {
          color: 'rgba(204, 204, 204, 0.95)',
          line: {
            color: 'rgba(217, 217, 217, 1.0)',
            width: 1,
          },
          symbol: 'circle',
          size: 16
        }
      };
      let data = [trace1, trace2];
      let layout = {
        title: 'Votes cast for ten lowest voting age population in OECD countries',
        xaxis: {
          showgrid: false,
          showline: true,
          linecolor: 'rgb(102, 102, 102)',
          titlefont: {
            font: {
              color: 'rgb(204, 204, 204)'
            }
          },
          tickfont: {
            font: {
              color: 'rgb(102, 102, 102)'
            }
          },
          autotick: false,
          dtick: 10,
          ticks: 'outside',
          tickcolor: 'rgb(102, 102, 102)'
        },
        margin: {
          l: 140,
          r: 40,
          b: 50,
          t: 80
        },
        legend: {
          font: {
            size: 10,
          },
          yanchor: 'middle',
          xanchor: 'right'
        },
        width: 600,
        height: 600,
        paper_bgcolor: 'rgb(254, 247, 234)',
        plot_bgcolor: 'rgb(254, 247, 234)',
        hovermode: 'closest'
      };
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);
    }
    //*********** 1 Line and 1 Bar Chart Graph ************//
    else if (this.subGraphType == "line_2") {
      let trace1 = {
        x: [0, 1, 2, 3, 4, 5],
        y: [1.5, 1, 1.3, 0.7, 0.8, 0.9],
        type: 'scatter',
        marker: { color: '#FF1493' },
        line: {color: 'blue'},
      };      
      let trace2 = {
        x: [0, 1, 2, 3, 4, 5],
        y: [1, 0.5, 0.7, -1.2, 0.3, 0.4],
        type: 'bar'
      };      
      let data = [trace1, trace2];      
      Plotly.newPlot(this.plotlyChart.nativeElement, data);
    }
    //*********** 1 Line and 2 Bars Chart Graph ************//
    else if (this.subGraphType == "line_3") {
      let trace1 = {
        x: [0, 1, 2, 3, 4, 5],
        y: [1.5, 1, 1.3, 0.7, 0.8, 0.9],
        type: 'scatter',
        marker: { color: '#FF1493' },
        line: {color: 'blue'},
      };      
      let trace2 = {
        x: [0, 1, 2, 3, 4, 5],
        y: [1, 0.5, 0.7, -1.2, 0.3, 0.4],
        type: 'bar'
      };
      let trace3 = {
        // x: [7, 8, 9, 10, 11, 12],
        x: [1.5, 2.3, 3.2, 3.7, 4.8, 5.5],
        y: [1, 0.5, 0.7, 1.2, 0.3, 0.4],
        type: 'bar'
      };      
      let data = [trace1, trace2, trace3];      
      Plotly.newPlot(this.plotlyChart.nativeElement, data);
    }
    //*********** 2 Lines and 1 Bar Chart Graph ************//
    else if (this.subGraphType == "line_4") {
      let trace1 = {
        x: [0, 1, 2, 3, 4, 5],
        y: [1.5, 1, 1.3, 0.7, 0.8, 0.9],
        type: 'scatter',
        marker: { color: '#FF1493' },
        line: {color: 'blue'},
      };      
      let trace2 = {
        x: [0, 1, 2, 3, 4, 5],
        y: [1, 0.5, 0.7, -1.2, 0.3, 0.4],
        type: 'bar'
      };
      let trace3 = {
        // x: [7, 8, 9, 10, 11, 12],
        x: [1.5, 2.3, 3.2, 3.7, 4.8, 5.5],
        y: [1, 0.5, 0.7, 1.2, 0.3, 0.4],
        type: 'scatter'
      };      
      let data = [trace1, trace2, trace3];      
      Plotly.newPlot(this.plotlyChart.nativeElement, data);
    }
    //*********** Group Bar Chart Graph ************//
    else if (this.subGraphType == "grouped_bar") {
      let trace1 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        name: 'SF Zoo',
        type: 'bar'
      };      
      let trace2 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [12, 18, 29],
        name: 'LA Zoo',
        type: 'bar'
      };      
      let data = [trace1, trace2];      
      let layout = {barmode: 'group'};      
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);      
    }
    //*********** Group Bar Chart Graph ************//
    else if (this.subGraphType == "stacked_bar") {
      let trace1 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        name: 'SF Zoo',
        type: 'bar'
      };
      let trace2 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [12, 18, 29],
        name: 'LA Zoo',
        type: 'bar'
      };
      let data = [trace1, trace2];
      let layout = {barmode: 'stack'};
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);          
    }
    //*********** Donut Chart Graph ************//
    else if (this.subGraphType == "donut") {
      let data = [{
        values: [16, 15, 12, 6, 5, 4, 42],
        labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
        domain: {column: 0},
        name: 'GHG Emissions',
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie'
      },{
        values: [27, 11, 25, 8, 1, 3, 25],
        labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
        text: 'CO2',
        textposition: 'inside',
        domain: {column: 1},
        name: 'CO2 Emissions',
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie'
      }];
      
      let layout = {
        title: 'Global Emissions 1990-2011',
        annotations: [
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'GHG',
            x: 0.17,
            y: 0.5
          },
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'CO2',
            x: 0.82,
            y: 0.5
          }
        ],
        height: 400,
        width: 600,
        showlegend: false,
        grid: {rows: 1, columns: 2}
      };  
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);          
    }
    //*********** Scatter Plot with a Color Dimension Chart Graph ************//
    else if (this.subGraphType == "scatter_plot_with_color") {
      let trace1 = {
        y: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        mode: 'markers',
        marker: {
          size: 40,
          color: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
        }
      };      
      let data = [trace1];      
      let layout = {
        title: 'Scatter Plot with a Color Dimension'
      };      
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);          
    }
    //*********** Scatter Plot with a Color Dimension Chart Graph ************//
    else if (this.subGraphType == "grouped_scatter") {
      let trace1 = {
        x: ['South Korea', 'China', 'Canada'],
        y: [24, 10, 9],
        name: 'Gold',
        type: 'scatter',
        mode: 'markers'
      };      
      let trace2 = {
        x: ['South Korea', 'China', 'Canada'],
        y: [13, 15, 12],
        name: 'Silver',
        type: 'scatter',
        mode: 'markers'
      };      
      let trace3 = {
        x: ['South Korea', 'China', 'Canada'],
        y: [11, 8, 12],
        name: 'Bronze',
        type: 'scatter',
        mode: 'markers'
      };      
      let data = [trace1, trace2, trace3];      
      let layout = {
        scattermode: 'group',
        title: 'Grouped by Country',
        xaxis: {title: 'Country'},
        yaxis: {title: 'Medals'}
      };       
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);          
    }
    //*********** Bubble Chart Size Scaling Chart Graph ************//
    else if (this.subGraphType == "bubble_2") {
      let trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 11, 12, 13],
        text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
        mode: 'markers',
        marker: {
          size: [400, 600, 800, 1000],
          sizemode: 'area'
        }
      };
      let trace2 = {
        x: [1, 2, 3, 4],
        y: [14, 15, 16, 17],
        text: ['A</br>size: 40</br>sixeref: 0.2', 'B</br>size: 60</br>sixeref: 0.2', 'C</br>size: 80</br>sixeref: 0.2', 'D</br>size: 100</br>sixeref: 0.2'],
        mode: 'markers',
        marker: {
          size: [400, 600, 800, 1000],
          //setting 'sizeref' to lower than 1 decreases the rendered size
          sizeref: 2,
          sizemode: 'area'
        }
      };
      let trace3 = {
        x: [1, 2, 3, 4],
        y: [20, 21, 22, 23],
        text: ['A</br>size: 40</br>sixeref: 2', 'B</br>size: 60</br>sixeref: 2', 'C</br>size: 80</br>sixeref: 2', 'D</br>size: 100</br>sixeref: 2'],
        mode: 'markers',
        marker: {
          size: [400, 600, 800, 1000],
          //setting 'sizeref' to less than 1, increases the rendered marker sizes
          sizeref: 0.2,
          sizemode: 'area'
        }
      };
      // sizeref using above forumla
      var desired_maximum_marker_size = 40;
      var size = [400, 600, 800, 1000];
      var trace4 = {
        x: [1, 2, 3, 4],
        y: [26, 27, 28, 29],
        text: ['A</br>size: 40</br>sixeref: 1.25', 'B</br>size: 60</br>sixeref: 1.25', 'C</br>size: 80</br>sixeref: 1.25', 'D</br>size: 100</br>sixeref: 1.25'],
        mode: 'markers',
        marker: {
          size: size,
          //set 'sizeref' to an 'ideal' size given by the formula sizeref = 2. * max(array_of_size_values) / (desired_maximum_marker_size ** 2)
          sizeref: 2.0 * Math.max(...size) / (desired_maximum_marker_size**2),
          sizemode: 'area'
        }
      };
      let data = [trace1, trace2, trace3, trace4];
      let layout = {
        title: 'Bubble Chart Size Scaling',
        showlegend: false,
        height: 600,
        width: 600
      };
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);
    }
    //*********** Marker Size, Color, and Symbol as an Array Chart Graph ************//
    else if (this.subGraphType == "bubble_3") {
      let trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 11, 12, 13],
        mode: 'markers',
        marker: {
          color: ['hsl(0,100,40)', 'hsl(33,100,40)', 'hsl(66,100,40)', 'hsl(99,100,40)'],
          size: [12, 22, 32, 42],
          opacity: [0.6, 0.7, 0.8, 0.9]
        },
        type: 'scatter'
      };
      
      let trace2 = {
        x: [1, 2, 3, 4],
        y: [11, 12, 13, 14],
        mode: 'markers',
        marker: {
          color: 'rgb(31, 119, 180)',
          size: 18,
          symbol: ['circle', 'square', 'diamond', 'cross']
        },
        type: 'scatter'
      };
      
      let trace3 = {
        x: [1, 2, 3, 4],
        y: [12, 13, 14, 15],
        mode: 'markers',
        marker: {
          size: 18,
          line: {
            color: ['rgb(120,120,120)', 'rgb(120,120,120)', 'red', 'rgb(120,120,120)'],
            width: [2, 2, 6, 2]
          }
        },
        type: 'scatter'
      };      
      let data = [trace1, trace2, trace3];      
      let layout = {showlegend: false};      
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);      
    }
    //***********Overlaid Area Chart Without Boundary Lines Graph ************//
    else if (this.subGraphType == "filled_2") {
      let trace1 = {
        x: [1, 2, 3, 4],
        y: [0, 2, 3, 5],
        fill: 'tozeroy',
        type: 'scatter',
        mode: 'none'
      };      
      let trace2 = {
        x: [1, 2, 3, 4],
        y: [3, 5, 1, 7],
        fill: 'tonexty',
        type: 'scatter',
        mode: 'none'
      };      
      let layout = {
        title: 'Overlaid Chart Without Boundary Lines'
      };      
      let data = [trace1, trace2];      
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);      
    }
    //*********** Stacked Area Chart Graph ************//
    else if (this.subGraphType == "filled_3") {
      var traces = [
        {x: [1,2,3], y: [2,1,4], stackgroup: 'one'},
        {x: [1,2,3], y: [1,1,2], stackgroup: 'one'},
        {x: [1,2,3], y: [3,0,2], stackgroup: 'one'}
      ];
      Plotly.newPlot(this.plotlyChart.nativeElement, traces, {title: 'stacked and filled line chart'});
    }
    //*********** Colored Bar Chart Graph ************//
    else if (this.subGraphType == "horizontal_bar_2") {
      let trace1 = {
        x: [20, 14, 23],
        y: ['giraffes', 'orangutans', 'monkeys'],
        name: 'SF Zoo',
        orientation: 'h',
        marker: {
          color: 'rgba(55,128,191,0.6)',
          width: 1
        },
        type: 'bar'
      };      
      let trace2 = {
        x: [12, 18, 29],
        y: ['giraffes', 'orangutans', 'monkeys'],
        name: 'LA Zoo',
        orientation: 'h',
        type: 'bar',
        marker: {
          color: 'rgba(255,153,51,0.6)',
          width: 1
        }
      };      
      let data = [trace1, trace2];      
      let layout = {
        title: 'Colored Bar Chart',
        barmode: 'stack'
      };      
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);
    }
    //*********** Bar Chart with Line Plot Graph ************//
    else if (this.subGraphType == "horizontal_bar_3") {
      var xSavings = [1.3586, 2.2623000000000002, 4.9821999999999997, 6.5096999999999996,
        7.4812000000000003, 7.5133000000000001, 15.2148, 17.520499999999998
      ];
      
      var xNetworth = [93453.919999999998, 81666.570000000007, 69889.619999999995, 78381.529999999999, 141395.29999999999, 92969.020000000004, 66090.179999999993, 122379.3];
      
      var ySavings = ['Japan', 'United Kingdom', 'Canada', 'Netherlands', 'United States', 'Belgium', 'Sweden', 'Switzerland'];
      
      var yNetworth = ['Japan', 'United Kingdom', 'Canada', 'Netherlands', 'United States', 'Belgium', 'Sweden', 'Switzerland'];
      
      let trace1 = {
        x: xSavings,
        y: ySavings,
        xaxis: 'x1',
        yaxis: 'y1',
        type: 'bar',
        marker: {
          color: 'rgba(50,171,96,0.6)',
          line: {
            color: 'rgba(50,171,96,1.0)',
            width: 1
          }
        },
        name: 'Household savings, percentage of household disposable income',
        orientation: 'h'
      };
      
      let trace2 = {
        x: xNetworth,
        y: yNetworth,
        xaxis: 'x2',
        yaxis: 'y1',
        mode: 'lines+markers',
        line: {
          color: 'rgb(128,0,128)'
        },
        name: 'Household net worth, Million USD/capita'
      };      
      let data = [trace1, trace2];      
      let layout = {
        title: 'Household Savings & Net Worth for Eight OECD Countries',
        xaxis1: {
          range: [0, 20],
          domain: [0, 0.5],
          zeroline: false,
          showline: false,
          showticklabels: true,
          showgrid: true
        },
        xaxis2: {
          range: [25000, 150000],
          domain: [0.5, 1],
          zeroline: false,
          showline: false,
          showticklabels: true,
          showgrid: true,
          side: 'top',
          dtick: 25000
        },
        legend: {
          x: 0.029,
          y: 1.238,
          font: {
            size: 10
          }
        },
        margin: {
          l: 100,
          r: 20,
          t: 200,
          b: 70
        },
        width: 600,
        height: 600,
        paper_bgcolor: 'rgb(248,248,255)',
        plot_bgcolor: 'rgb(248,248,255)',
        annotations: [
          {
            xref: 'paper',
            yref: 'paper',
            x: -0.2,
            y: '-0.109',
            text: 'OECD ' + '(2015), Household savings (indicator), ' + 'Household net worth (indicator). doi: ' + '10.1787/cfc6f499-en (Accessed on 05 June 2015)',
            showarrow: false,
            font:{
              family: 'Arial',
              size: 10,
              color: 'rgb(150,150,150)'
            }
          }
        ]
      };
      
      for ( var i = 0 ; i < xSavings.length ; i++ ) {
        var result = {
          xref: 'x1',
          yref: 'y1',
          x: xSavings[i]+2.3,
          y: ySavings[i],
          text: xSavings[i] + '%',
          font: {
            family: 'Arial',
            size: 12,
            color: 'rgb(50, 171, 96)'
          },
           showarrow: false,
        };
        var result2 = {
          xref: 'x2',
          yref: 'y1',
          x: xNetworth[i] - 20000,
          y: yNetworth[i],
          text: xNetworth[i] + ' M',
          font: {
            family: 'Arial',
            size: 12,
            color: 'rgb(128, 0, 128)'
          },
           showarrow: false
        };
        layout.annotations.push(result, result2);
      }
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);
    }
    //*********** Line and Scatter Plot Graph ************//
    else if (this.subGraphType == "line_5") {
      let trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'markers'
      };      
      let trace2 = {
        x: [2, 3, 4, 5],
        y: [16, 5, 11, 9],
        mode: 'lines'
      };      
      let trace3 = {
        x: [1, 2, 3, 4],
        y: [12, 9, 15, 12],
        mode: 'lines+markers'
      };      
      let data = [ trace1, trace2, trace3 ];      
      let layout = {
        title:'Line and Scatter Plot'
      };      
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);    
    }
    //*********** Line and Scatter Styling Graph ************//
    else if (this.subGraphType == "line_6") {
      let trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'markers',
        marker: {
          color: 'rgb(219, 64, 82)',
          size: 12
        }
      };      
      let trace2 = {
        x: [2, 3, 4, 5],
        y: [16, 5, 11, 9],
        mode: 'lines',
        line: {
          color: 'rgb(55, 128, 191)',
          width: 3
        }
      };      
      let trace3 = {
        x: [1, 2, 3, 4],
        y: [12, 9, 15, 12],
        mode: 'lines+markers',
        marker: {
          color: 'rgb(128, 0, 128)',
          size: 8
        },
        line: {
          color: 'rgb(128, 0, 128)',
          width: 1
        }
      };      
      let data = [trace1, trace2, trace3];      
      let layout = {
        title: 'Line and Scatter Styling'
      };            
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);    
    }
    //*********** Line Shape Options for Interpolation Graph ************//
    else if (this.subGraphType == "line_7") {
      let trace1 = {
        x: [1, 2, 3, 4, 5],
        y: [1, 3, 2, 3, 1],
        mode: 'lines+markers',
        name: 'linear',
        line: {shape: 'linear'},
        type: 'scatter'
      };      
      let trace2 = {
        x: [1, 2, 3, 4, 5],
        y: [6, 8, 7, 8, 6],
        mode: 'lines+markers',
        name: 'spline',
        text: ['tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object'],
        line: {shape: 'spline'},
        type: 'scatter'
      };      
      let trace3 = {
        x: [1, 2, 3, 4, 5],
        y: [11, 13, 12, 13, 11],
        mode: 'lines+markers',
        name: 'vhv',
        line: {shape: 'vhv'},
        type: 'scatter'
      };      
      let trace4 = {
        x: [1, 2, 3, 4, 5],
        y: [16, 18, 17, 18, 16],
        mode: 'lines+markers',
        name: 'hvh',
        line: {shape: 'hvh'},
        type: 'scatter'
      };      
      var trace5 = {
        x: [1, 2, 3, 4, 5],
        y: [21, 23, 22, 23, 21],
        mode: 'lines+markers',
        name: 'vh',
        line: {shape: 'vh'},
        type: 'scatter'
      };      
      var trace6 = {
        x: [1, 2, 3, 4, 5],
        y: [26, 28, 27, 28, 26],
        mode: 'lines+markers',
        name: 'hv',
        line: {shape: 'hv'},
        type: 'scatter'
      };      
      let data = [trace1, trace2, trace3, trace4, trace5, trace6];
      let layout = {
      legend: {
        y: 0.5,
        traceorder: 'reversed',
        font: {size: 16},
        yref: 'paper'
      }};
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);
    }
    //*********** Creating Tangent Lines with Shapes Graph ************//
    else if (this.subGraphType == "line_8") {
  
    }
    //*********** Automatically Adjust Margins Graph ************//
    else if (this.subGraphType == "pie_2") {
      let data = [{
        type: "pie",
        values: [2, 3, 4, 4],
        labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true
      }]      
      let layout = {
        height: 400,
        width: 400,
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        showlegend: false
      }      
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);
    }
    //*********** Automatically Adjust Margins Graph ************//
    else if (this.subGraphType == "pie_3") {
      let data = [{
        type: "pie",
        values: [2, 3, 4, 4],
        labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
        textinfo: "label+percent",
        insidetextorientation: "radial"
      }]      
      let layout = [{
        height: 700,
        width: 700
      }]      
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);
    }
    //*********** Pie Chart Subplots Graph ************//
    else if (this.subGraphType == "pie_4") {
      var allLabels = ['1st', '2nd', '3rd', '4th', '5th'];
      var allValues = [
        [38, 27, 18, 10, 7],
        [28, 26, 21, 15, 10],
        [38, 19, 16, 14, 13],
        [31, 24, 19, 18, 8]
      ];

      var ultimateColors = [
        ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
        ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],
        ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],
        ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']
      ];

      let data = [{
        values: allValues[0],
        labels: allLabels,
        type: 'pie',
        name: 'Starry Night',
        marker: {
          colors: ultimateColors[0]
        },
        domain: {
          row: 0,
          column: 0
        },
        hoverinfo: 'label+percent+name',
        textinfo: 'none'
      },{
        values: allValues[1],
        labels: allLabels,
        type: 'pie',
        name: 'Sunflowers',
        marker: {
          colors: ultimateColors[1]
        },
        domain: {
          row: 1,
          column: 0
        },
        hoverinfo: 'label+percent+name',
        textinfo: 'none'
      },{
        values: allValues[2],
        labels: allLabels,
        type: 'pie',
        name: 'Irises',
        marker: {
          colors: ultimateColors[2]
        },
        domain: {
          row: 0,
          column: 1
        },
        hoverinfo: 'label+percent+name',
        textinfo: 'none'
      },{
        values: allValues[3],
        labels: allLabels,
        type: 'pie',
        name: 'The Night Cafe',
        marker: {
          colors: ultimateColors[3]
        },
        domain: {
          x: [0.52,1],
          y: [0, 0.48]
        },
        hoverinfo: 'label+percent+name',
        textinfo: 'none'
      }];
      let layout = {
        height: 400,
        width: 500,
        grid: {rows: 2, columns: 2}
      };
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);
    }
    //*********** Simple Annotation Graph ************//
    else if (this.subGraphType == "line_9") {
      let trace1 = {
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        y: [0, 1, 3, 2, 4, 3, 4, 6, 5],
        type: 'scatter'
      };
      let trace2 = {
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        y: [0, 4, 5, 1, 2, 2, 3, 4, 2],
        type: 'scatter'
      };
      let data = [trace1, trace2];
      let layout = {
        showlegend: false,
        annotations: [
          {
            x: 2,
            y: 5,
            xref: 'x',
            yref: 'y',
            text: 'Annotation Text',
            showarrow: true,
            arrowhead: 7,
            ax: 0,
            ay: -40
          }
        ]
      };
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);      
    }
    //*********** Multiple Annotations Graph ************//
    else if (this.subGraphType == "line_10") {
      let trace1 = {
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        y: [0, 1, 3, 2, 4, 3, 4, 6, 5],
        type: 'scatter'
      };
      let trace2 = {
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        y: [0, 4, 5, 1, 2, 2, 3, 4, 2],
        type: 'scatter'
      };
      let data = [trace1, trace2];
      let layout = {
        showlegend: false,
        annotations: [
          {
            x: 2,
            y: 5,
            xref: 'x',
            yref: 'y',
            text: 'Custom Text',
            showarrow: true,
            arrowhead: 7,
            ax: 0,
            ay: -40
          },
          {
            x: 4,
            y: 4,
            xref: 'x',
            yref: 'y',
            text: 'Custom Text 2',
            showarrow: true,
            arrowhead: 7,
            ax: 0,
            ay: -40
          }
        ]
      };
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);    
    }
    //*********** Subplot Annotations Graph ************//
    else if (this.subGraphType == "line_11") {
      var trace0 = {
        x: [1, 2, 3],
        y: [4, 5, 6],
        type: 'scatter'
      };      
      let trace1 = {
        x: [20, 30, 40],
        y: [50, 60, 70],
        xaxis: 'x2',
        yaxis: 'y2',
        type: 'scatter'
      };      
      let data = [trace0, trace1];      
      let layout = {
        title: 'Subplot Annotations',
        xaxis: {domain: [0, 0.45]},
        yaxis2: {anchor: 'x2'},
        xaxis2: {domain: [0.55, 1]},
        annotations: [
          {
            x: 2,
            y: 5,
            xref: 'x',
            yref: 'y',
            text: 'Custom Text A',
            showarrow: true,
            arrowhead: 3,
            ax: -30,
            ay: -40
          },
          {
            x: 30,
            y: 60,
            xref: 'x2',
            yref: 'y2',
            text: 'Custom Text B',
            showarrow: true,
            arrowhead: 2,
            ax: -25,
            ay: -40
          }
        ]
      };
      Plotly.newPlot(this.plotlyChart.nativeElement, data, layout);   
    }
    //*********** Simple Annotation Graph ************//
    else if (this.subGraphType == "line_12") {
    
    }
  }

  // linspace(a:any,b:any,n:any) {
  //   return d3.range(n).map(function(i){return a+i*(b-a)/(n-1);});
  // }      
}


