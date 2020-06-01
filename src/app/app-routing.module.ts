import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    data: {
      title: 'Welcome',
      showChat: false
    }
  },
  {
    path: 'ui/welcome',
    component: WelcomeComponent,
    data: {
      title: 'Welcome',
      showChat: false
    }
  },
  {
    path: 'ui/home',
    component: HomeComponent,
    data: {
      title: 'Home',
      showChat: false
    }
  },
  {
    path: 'ui/about',
    component: AboutComponent,
    data: { title: 'About' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
