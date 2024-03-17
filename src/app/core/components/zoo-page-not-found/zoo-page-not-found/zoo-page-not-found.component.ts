import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'zoo-page-not-found',
  templateUrl: './zoo-page-not-found.component.html',
  styleUrls: ['./zoo-page-not-found.component.scss'],
})
export class ZooPageNotFoundComponent implements OnInit {
  content = 'Page Not Found';

  pageNotFound = 'assets/images/page-not-found.jpeg';
  unAuthourized = 'assets/images/page-not-found.jpeg';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/unauthorized') {
      this.content =
        'You are not authorized to access this page,Please contact your administrator';
      this.pageNotFound = 'assets/images/unauthorized.jpg';
    }
  }

  home() {
    this.router.navigate(['/dashboard']);
  }
}
