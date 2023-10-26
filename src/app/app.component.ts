import { Component } from '@angular/core';
import { WindowScrolledService } from './window-scrolled.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public windowScrolled$: Observable<boolean> = this.windowScrolledService.windowScrolled$;

  constructor(private windowScrolledService: WindowScrolledService, private router: Router) {}

  public toggleExpander(ev: MouseEvent): void {
    ev.preventDefault();
    document.body.classList.toggle('nav-expanded');
  }

  public navigate(ev: MouseEvent, url: string): void {
    this.toggleExpander(ev);
    this.router.navigateByUrl(url);
  }
}