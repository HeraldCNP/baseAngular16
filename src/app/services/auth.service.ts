import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from '../interfaces/loginForm.interface';
import { tap } from 'rxjs';
import { env } from 'src/env/env';

@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly URL = env.api;
  constructor(private http: HttpClient) { }

  validarToken(){
    const token = localStorage.getItem('token') || '';
    let dir = `${this.URL}/login/renew`;

    return this.http.get(dir, {
      headers: {
        'x-token': token
      }
    });
  }

  login(formData: LoginForm){
    let dir = `${this.URL}/login`;
    console.log(dir);
    return this.http.post<any>(dir, formData)
      .pipe(
        tap( (resp :any) => {
          localStorage.setItem('token', resp.token)
          // console.log(resp);
        } )
      );
  }
}
