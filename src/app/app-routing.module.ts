import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { HomeComponent } from './components/home/home.component'


//welcome
const routes: Routes = [
  { path: "", component: HomeComponent }, //canactivate Routeguard
  { path: "login", component: LoginComponent },
  { path: "welcome/:id", component: WelcomePageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

