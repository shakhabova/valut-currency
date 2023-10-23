import { Component } from '@angular/core';
import { WindowScrolledService } from './window-scrolled.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public windowScrolled$: Observable<boolean> = this.windowScrolledService.windowScrolled$;

  constructor(private windowScrolledService: WindowScrolledService) {}

  public toggleExpander(ev: MouseEvent): void {
    ev.preventDefault();
    document.body.classList.toggle('nav-expanded');
  }
}