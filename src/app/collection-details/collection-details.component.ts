import { Component, Input, OnInit } from '@angular/core';
import { RijksmuseumService } from '../services/rijksmuseum-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArtObject, ArtObjectCollection } from '../rijksmuseum-workspace/collection';

@Component({
  selector: 'collection-details',
  templateUrl: 'collection-details.component.html',
})
export class CollectionDeatilsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private museumService: RijksmuseumService
  ) {}
  id: string = '';
  artwork$!: Observable<any>;
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
    this.artwork$ = this.museumService.getDetails(this.id);
  }

  getBack() {
    this.router.navigate(['/']);
  }
}
