import { Component } from '@angular/core';
// import  routerTransition from './router.animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [ routerTransition ],
})
export class AppComponent {
  title = 'ng5';
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
