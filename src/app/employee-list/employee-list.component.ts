import { Component, OnInit } from '@angular/core';
import { Employee, Verifydto } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: Employee[]=[];
  
  constructor(private employeeservice: EmployeeService,
      private router:Router
    ) {}
    
    getStatusStyle(status: string) {
      switch (status) {
          case 'VERIFIED':
              return { color: 'green' };
          case 'Pending':
              return { color: 'orange' };
          case 'Rejected':
              return { color: 'red' };
          default:
              return { color: 'black' };
      }
  }
  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeservice.getEmployeesList().subscribe((data) => {
      this.employee= data;
    });
  }

  gotoRecord() {
    this.router.navigate(['/details']);
  }
  
  verify(transactionPK:Verifydto) {
    this.employeeservice.verifydata(transactionPK).subscribe((response) => {
      this.gotoRecord();
      console.log('Verification response:', response);
      window.location.reload();

    });
  }

  deleteitem(transactionReference:string,bankCode:string){
       this.employeeservice.delete(transactionReference,bankCode).subscribe((response)=>{
        console.log('o ',response);
        window.location.reload();


       });
  }
}
