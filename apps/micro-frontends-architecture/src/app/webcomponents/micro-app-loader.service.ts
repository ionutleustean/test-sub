

import {Injectable} from '@angular/core';

@Injectable(
)
export class MicroAppLoaderService {


    state: 'not_loaded' | 'show' | 'hide' = 'not_loaded';

    load(): void {

        if (this.state === 'show') {
            location.hash = '';
            this.state = 'hide';
        } else if (this.state === 'hide') {
            location.hash = 'client-a/page1';
            this.state = 'show';
            return;
        } else {
            const script = document.createElement('script');
            script['src'] = 'assets/client-a.bundle.js';
            document.body.appendChild(script);

            const clientA = document.createElement('client-a');
            const content = document.getElementsByTagName('body')[0];
            content.appendChild(clientA);


            location.hash = 'client-a/page1';
            this.state = 'show';
        }
    }

    load2(): void {

        if (this.state === 'show') {
            location.hash = '';
            this.state = 'hide';
        } else if (this.state === 'hide') {
            location.hash = 'client-a/page1';
            this.state = 'show';
            return;
        } else {
            const script = document.createElement('script');
            script['src'] = 'assets/app-5.js';
            document.body.appendChild(script);

            const clientA = document.createElement('app-5');
            const content = document.getElementsByClassName('aaaaaaaaaaaa')[0];
            content.appendChild(clientA);


            location.hash = 'client-a/page1';
            this.state = 'show';
        }
    }


}
