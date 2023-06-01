import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = '';
  change: boolean = false;

  constructor(private router: Router) {}

  changeView(view: string) {
    if (view === 'Vista 1') {
      this.title = 'Vista 1';
      this.change = true;
      this.router.navigate(['one']);
    } else if (view === 'Vista 2') {
      this.title = 'Vista 2';
      this.change = true;
      this.router.navigate(['two']);
    }
  }
}