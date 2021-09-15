import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FooterComponent} from './components/footer/footer.component';
import {SidebarComponent} from './components/dashboard/sidebar/sidebar.component';
import {ItemListComponent} from './components/dashboard/item-list/item-list.component';
import {FormsModule} from "@angular/forms";
import {ItemFilterByTitlePipe} from "./components/dashboard/pipes/item-filter-by-title";
import {ItemFilterByDescriptionPipe} from "./components/dashboard/pipes/item-filter-by-description";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent,
    ItemListComponent,
    ItemFilterByTitlePipe,
    ItemFilterByDescriptionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
