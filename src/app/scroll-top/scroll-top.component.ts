import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css'],
})
export class ScrollTopComponent {
  windowScrolled: boolean | undefined;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.windowScrolled = !!window.scrollY;
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
