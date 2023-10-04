import { Component, OnInit } from '@angular/core';
import { Verifydto } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  verifydt: Verifydto = new Verifydto("", "");
  validationErrors: any = {};

  constructor(private employeeservice: EmployeeService, private router: Router) {}

  ngOnInit(): void {}
  saveRecord() {
    this.employeeservice.verifydata(this.verifydt).subscribe(
      (data: any) => {
        if (data && data.code && data.code.toUpperCase() === "VALERRCOD") {
          console.log('Validation Error response:');
          if (data && data.details) {
            // Clear existing validation errors
            this.validationErrors = {};
  
            data.details.forEach((element: any) => {
              const key = Object.keys(element)[0];
              this.validationErrors[key] = element[key];
            });
          }
        } else {
          this.router.navigate(['/details']);

        }
      },
      (error) => {
        console.log("Error:", error);
        // Handle other types of errors if needed
      }
    );
  }
  
 
  onSubmit() {
    // Clear validation errors before verifying data
    this.validationErrors = {};
    console.log(this.verifydt);
    this.saveRecord();
  }
}  