import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ResumeComponent} from './resume/resume.component';
import {HomeComponent} from './home/home.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ResumeComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgxExtendedPdfViewerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
