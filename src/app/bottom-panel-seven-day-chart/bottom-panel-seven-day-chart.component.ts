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

  private margin = {top: 20, right: 20, bottom: 30, left: 50};
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
      date.setHours(idx);
      return date
    })
    console.log(date)
    this.data = date.map((e, idx) => {
      return {date: e, value: Math.floor(Math.random() * 30)}
    });
    this.width = 960 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    console.log(this.data)
  }

  private buildSvg(){
    this.svg =d3.select('svg')
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
  }


  private addXandYAxis() {
    // range of data configuring
    this.x = d3.scaleTime().range([0, this.width]);
    this.y = d3.scaleLinear().range([this.height, 0]);
    this.x.domain(d3.extent(this.data, (d:any) => d.date ));
    this.y.domain(d3.extent(this.data, (d:any) => d.value ));
    // Configure the X Axis
    this.svg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(this.x));
    // Configure the Y Axis
    this.svg.append('g')
      // .attr('class', 'axis axis--y')
      .call(d3.axisLeft(this.y));
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
      .attr('class', 'line')
      .attr('d', this.line);
  }

  ngOnInit() {
    this.buildSvg();
    this.addXandYAxis();
    this.drawLineAndPath();
  }

}

