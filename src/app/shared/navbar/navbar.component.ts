import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class NavbarComponent {
  @Input()
  title = 'Rijksmuseum';
}
