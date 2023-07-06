import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionDeatilsComponent } from './collection-details.component';
import { LoadingComponent } from '../shared/loading/loading.component';

@NgModule({
  declarations: [CollectionDeatilsComponent],
  imports: [CommonModule, LoadingComponent],
})
export class CollectionDetailsModule {}
