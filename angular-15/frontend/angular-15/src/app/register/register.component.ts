import { Component } from '@angular/core';
import { UserData } from '../user-data';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userModel=new UserData('madhu','123');
  res:any;

  constructor(private _enrollmentService: EnrollmentService){}

  onRegister(){
    this._enrollmentService.enroll(this.userModel).subscribe(
      (data)=>{
        this.res=data;
      },
      error=>console.error('Error: ',error));
  }
}
