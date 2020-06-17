import { Component, OnInit } from '@angular/core';
import { LogsService } from './services/logs.service';
import * as fileSaver from 'file-saver';
import { HttpResponse } from '@angular/common/http';
import { FormGroup,  Validators , FormBuilder } from '@angular/forms';

import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

   public logForm:FormGroup = this.fb.group({
		logDate: [,[Validators.required]]
   });

  constructor(private authService: AuthService, private routes : Router, private fileService: LogsService, private fb : FormBuilder) { }

  ngOnInit(): void {
  }
  download() {
	  
    this.fileService.downloadFile(this.logForm.get('logDate').value).then(response => {
			
			fileSaver.saveAs(response, 'logfile.gz');
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
  }
  
  onSubmit(){
    this.download();
  }
  
  signOut(): void {
    localStorage.removeItem('user_email');
    this.authService.signOut();
	  console.log(localStorage.getItem('user_email'));
    this.routes.navigate(['logout']);
  }
  

}
