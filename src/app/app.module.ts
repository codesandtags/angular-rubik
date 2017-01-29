import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { MenuComponent } from './features/menu/menu.component';
import { TableComponent } from './features/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    MenuComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
