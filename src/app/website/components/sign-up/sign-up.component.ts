import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/services/users-service/users.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;
  hide = true;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+")]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  submit(): void {

    if (this.signUpForm.valid) {
      const account = this.signUpForm.value;
      account.role = 'customer';
      //console.log(this.signUpForm.value);
      console.log(account);
      this.usersService.create(account).subscribe((user) => {
        console.log(user);
        Swal.fire({
          icon: 'success',
          title: 'Se ha registrado correctamente'
        }).then(() => {
          this.signUpForm.reset();
          // Go home (login).
          console.log('navigate sign in');
          this.router.navigate(['']);
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

}
