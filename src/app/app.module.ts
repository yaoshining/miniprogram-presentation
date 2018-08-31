import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlidesModule } from './slides/slides.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SlidesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
