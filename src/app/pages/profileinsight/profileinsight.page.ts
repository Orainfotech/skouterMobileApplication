import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-profileinsight',
  templateUrl: './profileinsight.page.html',
  styleUrls: ['./profileinsight.page.scss'],
})
export class ProfileinsightPage implements OnInit {
  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  constructor(public navctrl:NavController) { }

  ngOnInit() {
    this.createBarChart();
  }
  Next(){ 
  }
  gotomedia(){  

  }
  gotoactivity(){
    this.navctrl.navigateRoot('profilemediaactivity');
  }
  gotoinsights(){
    this.navctrl.navigateRoot('profileinsight');
  }
  gotomediamore(){
    this.navctrl.navigateRoot('profilemediamore');
  }
  gotosetting(){
    this.navctrl.navigateRoot('setting'); 
  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
