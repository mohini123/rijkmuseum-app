import { Component } from '@angular/core';
import { RijksmuseumService } from '../services/rijksmuseum-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'collection-details',
  templateUrl: 'collection-details.component.html',
})
export class CollectionDeatilsComponent {
  artwork$ = this.route.queryParams.pipe(
    switchMap((params) => this.museumService.getDetails(params['id']))
  );
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private museumService: RijksmuseumService
  ) {}

  getBack() {
    this.router.navigate(['/']);
  }
}
