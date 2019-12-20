import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { EventComponent } from './component/event/event.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/login/login.component';
import { StartComponent } from './component/start/start.component';
import { SiginUpComponent } from './component/sigin-up/sigin-up.component';
import { WeventComponent } from './component/wevent/wevent.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'event', component: EventComponent }, 
  { path: 'adminstrador', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: StartComponent },
  { path: 'sigin-up',component: SiginUpComponent},
  { path: 'wevent',component: WeventComponent},
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'home' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component:HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    EventComponent,
    AdminComponent,
    LoginComponent,
    StartComponent,
    SiginUpComponent,
    WeventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
      FormsModule,
      ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
