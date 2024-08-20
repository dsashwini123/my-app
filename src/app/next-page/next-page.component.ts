import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css']
})
export class NextPageComponent {
  data: any;
  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation()?.extras.state?.['data'];
  }
}
