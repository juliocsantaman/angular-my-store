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
  ) { }

  ngOnInit(): void {
    this.loginForm = this.initForm();

  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+")]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  submit(): void {

    if (this.loginForm.valid) {
      const account = this.loginForm.value;
      console.log(this.loginForm.value);

      this.authService.login(account.email, account.password).subscribe((token) => {
        //console.log(token.access_token);
        this.tokenService.saveToken(token.access_token);

        Swal.fire({
          icon: 'success',
          title: 'Iniciando sesión'
        }).then(() => {
          this.loginForm.reset();
          // Go home (products).
          this.authService.profile().subscribe((data) => {
            console.log(data);
            this.router.navigate(['home']);
          });

        });

      });

    }
    else {
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
