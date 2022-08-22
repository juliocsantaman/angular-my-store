import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { TokenService } from 'src/app/services/token-service/token.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  hide = true;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.initForm();
  }

  ngOnInit(): void {
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+")]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  get emailField() {
    return this.loginForm.get('email');
  }

  get passwordField() {
    return this.loginForm.get('password');
  }

  submit(): void {

    if (this.loginForm.valid) {
      const account = this.loginForm.value;
      console.log(this.loginForm.value);

      // this.authService.login(account.email, account.password).subscribe((token) => {
      //   //console.log(token.access_token);
      //   this.tokenService.saveToken(token.access_token);

      //   Swal.fire({
      //     icon: 'success',
      //     title: 'Iniciando sesión',
      //     allowOutsideClick: false,
      //     showConfirmButton: false,
      //     timer: 1000

      //   }).then(() => {
      //     this.loginForm.reset();
      //     // Go home (products).
      //     this.authService.profile().subscribe((data) => {
      //       console.log(data);
      //       this.router.navigate(['home']);
      //     });

      //   });



      // });

      this.authService.login(account.email, account.password).subscribe(
        (token) => {
          //console.log(token.access_token);
          this.tokenService.saveToken(token.access_token);

          Swal.fire({
            icon: 'success',
            title: 'Iniciando sesión',
            allowOutsideClick: false,
            showConfirmButton: false,
            timer: 1000

          }).then(() => {
            this.loginForm.reset();
            // Go home (products).
            this.authService.profile().subscribe((data) => {
              console.log(data);
              this.router.navigate(['home']);
            });

          });
        },

        err => {
          Swal.fire({
            icon: 'error',
            title: 'Account is not unauthorized',
            allowOutsideClick: false,
            showConfirmButton: true
          })
        }
      );

    }

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: 'Ingresa la información correcta.'
      });
    }

  }

  goFormSignUp() {
    this.router.navigate(['register']);
  }
}
