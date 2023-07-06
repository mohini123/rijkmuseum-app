import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RijksmuseumWorkspaceComponent } from './rijksmuseum-workspace.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../shared/loading/loading.component';

@NgModule({
  declarations: [RijksmuseumWorkspaceComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
    NgbPaginationModule,
    FormsModule,
    LoadingComponent,
  ],
})
export class RijksmuseumWorkspaceModule {}
