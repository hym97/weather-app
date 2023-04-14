import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
//
// const temp = [
//   {time:'00', temp:10},
//   {time:'06', temp:12},
//   {time:'09', temp:15},
//   {time:'12', temp:22},
//   {time:'17', temp:25},
// ]
const date = Array(24).map((e, idx) => {
  const date = new Date();
  date.setHours(idx);
  return date
})

const data = date.map((e,idx)=>{
  return {date:e, value: Math.floor(Math.random() * 30)}
})

// const data: any[] = [
//   {date: new Date('2010-01-01'), value: 40},
//   {date: new Date('2010-01-04'), value: 93},
//   {date: new Date('2010-01-05'), value: 95},
//   {date: new Date('2010-01-06'), value: 130},
//   {date: new Date('2010-01-07'), value: 110},
//   {date: new Date('2010-01-08'), value: 120},
//   {date: new Date('2010-01-09'), value: 129},
//   {date: new Date('2010-01-10'), value: 107},
//   {date: new Date('2010-01-11'), value: 140},
// ];
@Component({
  selector: 'app-bottom-panel-seven-day-chart',
  templateUrl: './bottom-panel-seven-day-chart.component.html',
  styleUrls: ['./bottom-panel-seven-day-chart.component.scss']
})
export class BottomPanelSevenDayChartComponent implements OnInit{

  private margin = {top: 20, right: 62, bottom: 30, left: 52};
  private width!: number;
  private height!: number;
  private x: any;
  private y: any;
  private svg: any;
  private line:any // this is line defination
  private data:any;
  constructor() {
    const date = Array(24).fill(1).map((e, idx) => {
      const date = new Date();
      date.setHours(idx+1);
      date.setMinutes(0);
      date.setSeconds(0);
      return date
    })
    console.log(date)
    this.data = date.map((e, idx) => {
      return {date: e, value: Math.floor(Math.random() * 30)}
    });
    this.width = 666;
    this.height = 113;
    console.log(this.data)
  }

  private buildSvg(){
    this.svg =d3.select('svg')
      .append('g')
      .attr('transform', `translate(10,20)`);
  }


  private addXandYAxis() {
    // range of data configuring
    this.x = d3.scaleTime().range([0, this.width]);
    this.y = d3.scaleLinear().range([this.height, 0]);
    this.x.domain(d3.extent(this.data, (d:any) => d.date ));
    // this.y.domain(d3.extent(this.data, (d:any) => d.value));
    console.log(d3.extent(this.data, (d:any) => d.value))
    let xDomain = d3.extent(this.data, (d:any) => d.date );
    let yDomain:any = d3.extent(this.data, (d:any) => d.value);
    console.log(yDomain)
    yDomain = [-5, yDomain[1]]
    console.log(yDomain)

    // Configure the X Axis
    let tickLabels = ['1am', '4am', '7am', '10am', '1pm','4pm','7pm'];
    let xAxisGenerator = d3.axisBottom(this.x);
    // XAxisGenerator.ticks(7);
    xAxisGenerator.tickValues([1,4,7,10,13,16,19].map((e)=>this.data[e].date))
    xAxisGenerator.tickFormat((d,i)=>{
      return tickLabels[i]
    });
    xAxisGenerator.tickSize(0).tickPadding(20);

    let xAxis= this.svg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(xAxisGenerator);

    xAxis.select('.domain')
      .attr('color','#D3D9E8')
      .attr('stroke-width', '1px')

    xAxis.selectAll('text')
      .attr('font-size','14px')
      .attr('color', '#646E89')


    // Configure the Y Axis
    let yAxisGenerator = d3.axisRight(this.y.domain(yDomain));
    yAxisGenerator.ticks(3);
    yAxisGenerator.tickFormat((d,i)=>`${d}°`)
    yAxisGenerator.tickSize(0).tickPadding(10);


    let yAxis = this.svg.append('g')
      .attr('transform', `translate(${this.width},0)`)
      // .attr('class', 'axis axis--y')
      .call(yAxisGenerator);

    yAxis.select('.domain')
      .attr('color', '#D3D9E8')
      .attr('stroke-width', '1px')

    yAxis.selectAll('text')
      .attr('font-size', '14px')
      .attr('color', '#646E89')
  }
  // private addXandYAxis(){
  //   this.x = d3.scaleTime().range([0, this.width]);
  //   this.y = d3.scaleLinear().range([this.height,0]);
  //   this.x.domain(d3.extent(this.data, (d)=>d.date));
  //   this.y.domain(d3.extent(this.data, (d)=>d.data))
  //
  //   this.svg.append('g')
  //     .attr('transform', `translate(0, ${this.height})`)
  //     .call(d3.axisBottom(this.x));
  //
  //   this.svg.append('g')
  //     .attr('class', 'axis axis--y')
  //     .call(d3.axisLeft(this.y));
  //
  //
  // }


  private drawLineAndPath() {
    this.line = d3.line()
      .x( (d: any) => this.x(d.date) )
      .y( (d: any) => this.y(d.value) );
    // Configuring line path
    this.svg.append('path')
      .datum(this.data)
      .attr('fill', 'none')
      .attr('stroke', '#d3d9E8')
      .attr('stroke-width', 1)
      .attr('class', 'line')
      .attr('d', this.line);
  }

  ngOnInit() {
    this.buildSvg();
    this.addXandYAxis();
    this.drawLineAndPath();
  }

}

