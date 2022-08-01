import { Component } from '@angular/core';
import { FileService } from './services/files-service/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imgUpload: string = '';

  constructor(
    private fileService: FileService
  ) {}

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
