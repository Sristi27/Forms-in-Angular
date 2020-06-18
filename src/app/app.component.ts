import { Component, ViewChild } from '@angular/core';
import { NgForm, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f',{static: false}) signUpform:NgForm; 
  defaultQues='pet';
  submitted=false;
  answer='';
  genders=['male','female'];
  user={
    username:'',
    email:'',
    secret:'',
    answer:'',
    gender:'',
      
  };
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpform.setValue({
      userData:{
        username:suggestedName,
        email:'',
      },
      secret:'pet',
      answer:'',
      gender:'male'
    });
    
  }
  onSubmit(form : NgForm){
    this.submitted=true;
    this.user.username=this.signUpform.value.userData.username;
    this.user.email=this.signUpform.value.userData.email;
    this.user.secret=this.signUpform.value.secret;
    this.user.answer=this.signUpform.value.answer;
    this.user.gender=this.signUpform.value.gender;

    this.signUpform.reset();
  }
}
