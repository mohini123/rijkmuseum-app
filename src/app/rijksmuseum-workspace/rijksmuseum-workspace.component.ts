import { Component, inject } from '@angular/core';
import { RijksmuseumService } from '../services/rijksmuseum-service.service';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  catchError,
  map,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

@Component({
  selector: 'app-rijksmuseum-workspace',
  templateUrl: './rijksmuseum-workspace.component.html',
  styleUrls: ['./rijksmuseum-workspace.component.scss'],
})
export class RijksmuseumWorkspaceComponent {
  router = inject(Router);
  museumService = inject(RijksmuseumService);
  loading: boolean = true;
  ErrorMsg: boolean = false;
  searchTerm = '';
  search$ = new BehaviorSubject<string>('');
  collections$ = this.search$.pipe(
    tap((_) => (this.loading = true)),
    switchMap((search) => {
      return this.museumService.getData(search).pipe(
        map((collections) => collections.artObjects),
        tap((_) => (this.loading = false)),
        catchError((error) => {
          this.loading = false;
          return throwError(() => error);
        })
      );
    })
  );

  searchArtwork(searchTerm: string) {
    this.search$.next(searchTerm);
  }

  goToDetails(id: string) {
    this.router.navigate(['/details'], { queryParams: { id: id } });
  }
}
