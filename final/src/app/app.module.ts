import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/component.module';
import { CreateComponent } from './create/create.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CategoryComponent } from './pages/category/category.component';
import { EventComponent } from './pages/event/event.component';
import { EventformComponent } from './pages/eventform/eventform.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SiginUpComponent } from './pages/sigin-up/sigin-up.component';
import { StartComponent } from './pages/start/start.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { WeventComponent } from './pages/wevent/wevent.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'event', component: EventComponent }, 
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: StartComponent },
  { path: 'sigin-up',component: SiginUpComponent},
  { path: 'wevent',component: WeventComponent},
  { path: 'eventform',component:EventformComponent},
  { path: 'categories',component:CategoryComponent},

  
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'home' }
  },
  { path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  
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
    WeventComponent,
    EventformComponent,
    CreateComponent,
    CategoryComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
      FormsModule,
      ReactiveFormsModule,
      ComponentModule,
      BrowserAnimationsModule,
      HttpClientModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
