import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	openNav() {
		setTimeout(() => {
		this.navbarOpen = !this.navbarOpen;
		}, 1);
	}
  title = 'EA-FrontEnd';
  navbarOpen = false;
}
