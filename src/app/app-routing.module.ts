import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RijksmuseumWorkspaceComponent } from './rijksmuseum-workspace/rijksmuseum-workspace.component';
import { CollectionDeatilsComponent } from './collection-details/collection-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RijksmuseumWorkspaceComponent,
  },
  {
    path: 'details',
    component: CollectionDeatilsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
