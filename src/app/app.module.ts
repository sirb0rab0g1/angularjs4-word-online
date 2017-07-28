import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

//template components
import { EditorComponent } from './editor/editor.component';

//angular material components
import { MdSidenavModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdProgressBarModule } from '@angular/material';
//prime components
import { EditorModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    //angularmaterial
    MdSidenavModule,
    MdButtonModule,
    MdProgressBarModule,

    //prime-faces
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
