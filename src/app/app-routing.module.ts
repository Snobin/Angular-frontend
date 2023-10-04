import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {path:"details",component:EmployeeListComponent},
  {path:"",redirectTo:"details",pathMatch:"full"},
  {path:"create",component:CreateEntryComponent},
  {path:"verify",component:VerifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
