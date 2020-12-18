import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner5',
  templateUrl: './banner5.component.html',
  styleUrls: ['./banner5.component.css']
})
export class Banner5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: any = {
    items:1,
    merge:true,
    loop:true,
    margin:10,
    video:true,
    lazyLoad:true,
    center:true,
    responsive:{
        480:{
            items:2
        },
        600:{
            items:4
        }
    },
    nav: true
  }

}


