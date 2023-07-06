import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RijksmuseumWorkspaceModule } from './rijksmuseum-workspace/rijksmuseum-workspace.module';
import { CollectionDetailsModule } from './collection-details/collection-details.module';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RijksmuseumWorkspaceModule,
    CollectionDetailsModule,
    NgbModule,
    NgbAlertModule,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
