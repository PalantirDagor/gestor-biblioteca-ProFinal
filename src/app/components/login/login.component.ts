import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginIniciado: any = null;

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  logingUsuario(){
    if(this.loginForm.valid){
      this.loginIniciado = this.loginForm.value;
      console.log(this.loginIniciado);
    }
  }
}
