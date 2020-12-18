import { Component, OnInit } from '@angular/core';
import  AOS  from 'aos';

@Component({
  selector: 'app-banner3',
  templateUrl: './banner3.component.html',
  styleUrls: ['./banner3.component.css']
})
export class Banner3Component implements OnInit {


  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 20,
    merge: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
