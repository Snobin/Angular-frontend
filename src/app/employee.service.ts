import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee,Verifydto } from './employee';
import { EmployeePostDTO } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:8089/transactions/get";
  private createUrl="http://localhost:8089/transactions/create";
  private verificationURL = "http://localhost:8089/transactions/verify";

  constructor(private httpClient:HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee:EmployeePostDTO):Observable<Object>{
    console.log(employee.bankCode);
    return this.httpClient.post(`${this.createUrl}`,employee)
  }
   verifydata(veri:Verifydto): Observable<Object> {
    console.log(veri);
    return this.httpClient.put(`${this.verificationURL}`, veri);
  }

  delete(transactionReference:string,bankCode:string):Observable<Object>{

    const deleteURL= `http://localhost:8089/transactions/deleteByid/${transactionReference}/${bankCode}`;
    window.location.reload();

    return this.httpClient.delete(deleteURL,{});
  }

  print(){
    console.log("abc");
  }
}
