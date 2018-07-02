import {ChangeDetectorRef, Component, NgZone, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {MicroAppLoaderService} from './micro-app-loader.service';
import {ActivatedRoute, Router} from '@angular/router';
import {load} from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-webcomponents',
  templateUrl: './webcomponents.component.html',
  styleUrls: ['./webcomponents.component.css'],
})
export class WebcomponentsComponent implements OnInit {
  private index = 5;

  i = 0;

  constructor(private microAppLoaderService: MicroAppLoaderService, private router: Router, private r: Renderer2) {
  }

  ngOnInit() {

    // if (window.location.pathname.startsWith('/app5')) {
    //   this.index = 5;
    // } else if (window.location.pathname.startsWith('/app6')) {
    //   this.index = 6;
    //
    // }

    this.setComponent(5);
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


    this.render(index);


  }

  displayComponent(index) {
    return {display: (this.index === index ? 'block' : 'none')};
  }

  render(index) {

    this.i++;
    let content = document.getElementsByClassName('aaaaaaaaaaaa')[0];


    const contentA = document.createElement('div');
    const clientA = document.createElement('app-' + index);


   this.r.removeChild(content, content.firstChild)
    setTimeout(()=> {

    this.r.appendChild(content, clientA);
    }, 10);

    // setTimeout(()=> {
    //   content['prepend'](clientA);
    // }, 0);


    return this.index === index;
  }
}
