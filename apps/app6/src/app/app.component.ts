import { Component } from '@angular/core';
import { environment } from '../../../micro-frontends-architecture/src/environments/environment';


@Component({
  selector: 'micro-frontends-architecture-app6',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'micro-frontends-architecture';
  env = environment;
}
