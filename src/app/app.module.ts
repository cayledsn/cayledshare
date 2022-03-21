import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShareFileComponent } from './share-file/share-file.component';
import { MouhamadComponent } from './mouhamad/mouhamad.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    ShareFileComponent,
    MouhamadComponent,
  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
