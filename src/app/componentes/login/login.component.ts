import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  formularioLogin = new FormGroup({
    n_identificacion: new FormControl(""),
    contrasena:new FormControl("")
  });

  constructor(private _builder:FormBuilder,private router:Router){
    // this.formularioLogin = this._builder.group({
    //    n_identificaion:[''],
    //    contrasena:['']
    //  })
  }
  iniciarSesion():void{
    if(this.formularioLogin.value.n_identificacion=="123"){
      this.router.navigate(['/principal'])
    }else{
      alert("Hola")
    }
  }
}
