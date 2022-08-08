import { Component, OnInit } from '@angular/core';
import { FileService } from './services/files-service/file.service';
import { AuthService } from './services/auth-service/auth.service';
import { TokenService } from './services/token-service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  imgUpload: string = '';

  constructor(
    private fileService: FileService,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = this.tokenService.getToken();
    if(token) {
      //console.log('Token: ', token);
      this.authService.profile().subscribe((data) => {
        // console.log('Data: ', data);
        // console.log('redirección xd');
        this.router.navigate(['home']);
      });
    }
  }

  downloadPdf() {
    this.fileService.getFile('my.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf').subscribe(()=> {

    });
  }

  upload(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if(file) {
      this.fileService.uploadFile(file).subscribe((response) => {
        this.imgUpload = response.location;
      });
    }
  }
}
