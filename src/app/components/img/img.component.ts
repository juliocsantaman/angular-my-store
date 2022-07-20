import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    // code...
    console.log('change just img => ', this.img);
  }

  //@Input() img: string = '';
  @Input() alt: string = '';
  imageDefault: string = "./assets/img/default.png";
  @Output() loaded = new EventEmitter<string>();
  counter = 0;
  counterFn: number | undefined;

  constructor() {
    // before render.
    // NOT async -- once time.
    console.log('constructor', 'img value -> ', this.img);
   }

   ngOnChanges(changes: SimpleChanges): void {
    // before and during render.
    // changes inputs.
    // run many times.
    console.log('ngOnChanges', 'img value -> ', this.img);
    console.log('changes ', changes);
   }

  ngOnInit(): void {
    // before render.
    // yes async - fetch.
    // run once time.
    console.log('ngOnInit', 'img value -> ', this.img);
    // this.counterFn = window.setInterval(() => {
    //   // code...
    //   this.counter += 1;
    //   console.log('run counter.');
    // }, 1000);
  }

  ngAfterViewInit(): void {
    // after render.
    // handler children.
    console.log('ngAfterViewInit', 'img value -> ', this.img);
  }

  ngOnDestroy(): void {
    // delete.
    console.log('ngOnDestroy', 'img value -> ', this.img);
    window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Child, loaded.');
    this.loaded.emit(this.img);
  }

}
