import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  user: User | null = null;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user$.subscribe((data) => {
      this.user = data;
    })
  }

}
