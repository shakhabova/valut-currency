import { Component } from '@angular/core';
import { WindowScrolledService } from '../window-scrolled.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css'],
})
export class ScrollTopComponent {
  windowScrolled$ = this.windowScrolledService.windowScrolled$
    .pipe(
      map(scrolled => scrolled ? 'block' : 'none'),
    );

  constructor(private windowScrolledService: WindowScrolledService) {}
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
