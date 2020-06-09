import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { FormControl, FormsModule ,FormGroup,} from '@angular/forms';
import { ITrendData } from './ITrendData';
import { TrendsServices } from './trends.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
	
	lineChartData: ChartDataSets[] = [{ data: [], label: 'Required Employees count' }, ];

	lineChartLabels: Label[] ;

	lineChartOptions = {
		responsive: true,
	  };

	  lineChartColors: Color[] = [
		{
		  borderColor: 'black',
		  backgroundColor: 'rgba(255,255,0,0.28)',
		},
	  ];

	  lineChartLegend = true;
	  lineChartPlugins = [];
	  lineChartType = 'line';
	  public loading:boolean= true;
	  myGroup = new FormGroup({
		   dropDownText:new FormControl()
		});
	  

	  companies : string[];
	  employeeCount : any[];
	  year : string[];
	  

  constructor(private authService: AuthService, private routes: Router , private service : TrendsServices) { }

  ngOnInit(): void {
	  
	  this.service.getCompanies().subscribe((data)=>{
		  this.companies = data;
		  this.loading = false;
	  });
  }
  signOut(): void {
    localStorage.removeItem('user_email');
    this.authService.signOut();
	console.log(localStorage.getItem('user_email'));
    this.routes.navigate(['logout']);

  }
  viewData(){
	  this.year = [];
	  this.lineChartLabels=[];
	  this.service.getTrendDatas(this.myGroup.get('dropDownText').value).subscribe((data)=>{
	  this.lineChartData[0].data = data.map(a => a.required_employee_count);
	  this.year.push(data.map(a=>a.year).toString());
	  console.log("this year"+this.year[0]);
	  this.lineChartLabels = this.year[0].split(',');
	  });
	  
	  
	 	  
  }
  isLoading(){
		  return this.loading;
  }
}
