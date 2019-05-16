import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ResumeComponent} from './resume/resume.component';
import {HomeComponent} from './home/home.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

const appRoutes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
