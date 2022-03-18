import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShareFileComponent } from './share-file/share-file.component';
import { MouhamadComponent } from './mouhamad/mouhamad.component';

@NgModule({
  declarations: [
    AppComponent,
    ShareFileComponent,
    MouhamadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
