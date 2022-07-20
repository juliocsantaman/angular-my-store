import { Component } from '@angular/core';

interface User {
  username: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular My Store';
  imgSrc = 'https://source.unsplash.com/random';
  inputText: string = ''; //https://www.w3schools.com/howto/img_avatar.png
  success: boolean = false;
  users: User[] = [
    {
      username: 'juliocsantaman',
      email: 'juliocsantaman@gmail.com'
    },
    {
      username: 'priscila',
      email: 'priscila@gmail.com'
    },
    {
      username: 'fernando',
      email: 'fernando@gmail.com'
    }
  ];

  newUsername: string = '';

  name: string = 'Valentina';

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  register = {
    name: '',
    email: '',
    password: ''
  }

  showImg: boolean = true;

  showMessage(): void {
    console.log('Hello, World');
  }

  changeTitle(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.title = element.value;
  }

  addUsername(input: HTMLInputElement): void {
    this.users.push(
      {
        username: this.newUsername,
        email: 'default@gmail.com'
      }
    );

    this.newUsername = '';

    input.focus();
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  onRegister(): void {
    console.log(this.register);
  }

  onLoaded(img: string): void {
    console.log('Parent, loaded - ', img);
  }

  toggleImg(): void {
    this.showImg = !this.showImg;
  }
}
