import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
	
	<ul>
		<li><a routerLink="/absolute">lazyload absolute path 'src/app/a/a.module'</a></li>
		<li><a routerLink="/relative">lazyload relative path 'a/a.module'</a></li>
	</ul>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
