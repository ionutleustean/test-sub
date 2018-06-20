import {Component, OnInit} from '@angular/core';
import {MicroAppLoaderService} from './micro-app-loader.service';
import {ActivatedRoute, Router} from '@angular/router';
import {load} from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-webcomponents',
  templateUrl: './webcomponents.component.html',
  styleUrls: ['./webcomponents.component.css']
})
export class WebcomponentsComponent implements OnInit {
  private index = 5;

  constructor(private microAppLoaderService: MicroAppLoaderService, private router: Router) {
  }

  ngOnInit() {

    if (window.location.pathname.startsWith('/app5')) {
      this.index = 5;
    } else if (window.location.pathname.startsWith('/app6')) {
      this.index = 6;

    }
  }

  load() {
    this.microAppLoaderService.load();

  }


  setComponent(index) {
    this.index = index;
    if (index === 5) {
      this.router.navigate(['app5']);
    } else if (index === 6) {
      this.router.navigate(['app6']);
    }

  }

  displayComponent(index) {
    return {display: (this.index === index ? 'block' : 'none')};
  }
}
