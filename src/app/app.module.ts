import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import HttpClientModule from @angular/common/http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { SoftwareComponent } from './software/software.component';
import { SourcecodeComponent } from './sourcecode/sourcecode.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SoftwareComponent,
    SourcecodeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
