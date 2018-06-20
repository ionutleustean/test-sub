import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {

  public index = 3;


  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {

  }

  setIframe(index) {
    this.index = index;
  }

  displayIframe(index) {
    return {width: '100%', height: '100%', border: 'none', display : (this.index === index ? 'block' : 'none')};
  }

}

