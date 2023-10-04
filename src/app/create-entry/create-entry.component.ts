import { Component, OnInit } from '@angular/core';
import { EmployeePostDTO } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent implements OnInit {
  employeePost: EmployeePostDTO = new EmployeePostDTO('', '', '', NaN, '', '');

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {}

  saveRecord() {
    this.employeeService.createEmployee(this.employeePost).subscribe(
      (data: any) => {
        console.log("checking");
        if (data && data.code && data.code.toUpperCase() === "VALERRCOD") {
          if (data && data.details) {
            data.details.forEach((element: any) => {
              var key = Object.keys(element)[0];
              this.validationErrors[key] = element[key];
            });
          }
        } else {
          this.gotoRecord();
        }
      },
      (error) => {
        console.log("Error:", error);
        if (error.error && error.error.code === "VALERRCOD") {
           this.handleValidationErrors(error.error); 
        }
      }
    );
  }
  handleValidationErrors(error: any) {
    if (error.code === "VALERRCOD" && error.details) {
      error.details.forEach((detail: any) => {
        for (const key in detail) {
          if (detail.hasOwnProperty(key)) {
            this.validationErrors[key] = detail[key];
          }
        }
      });
    }
  }
  
  
  
  validationErrors:any={};
  
  
  
  
  gotoRecord() {
    this.router.navigate(['/details']);
  }

  onSubmit() {
    this.validationErrors={};
    console.log(this.employeePost);
    this.saveRecord();
  }
}
