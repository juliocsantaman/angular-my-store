import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { User } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User | null = null;

  constructor(
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.authService.user$.subscribe((data) => {
      this.user = data;
    });
  }

}
