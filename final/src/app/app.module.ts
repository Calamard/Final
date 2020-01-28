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
import { LoginComponent } from './pages/login/login.component';
import { SiginUpComponent } from './pages/sigin-up/sigin-up.component';
import { StartComponent } from './pages/start/start.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { WeventComponent } from './pages/wevent/wevent.component';
import { HttpClientModule } from '@angular/common/http';
import { TalkformComponent } from './pages/talkform/talkform.component';
import { SpeakerformComponent } from './pages/speakerform/speakerform.component';
import { SalonformComponent } from './pages/salonform/salonform.component';


const appRoutes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'event', component: EventComponent }, 
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: StartComponent },
  { path: 'sigin-up',component: SiginUpComponent},
  { path: 'wevent',component: WeventComponent},
  { path: 'eventform',component:EventformComponent},
  { path: 'categories',component:CategoryComponent},
  { path: 'talkform',component:TalkformComponent},
  { path: 'speakerform',component:SpeakerformComponent},
  { path: 'salonform',component:SalonformComponent},
  { path: 'start',component:StartComponent},
  
  {
    path: 'event',
    component: EventComponent,
    data: { title: 'event' }
  },
  { path: '**',
    redirectTo: '/event',
    pathMatch: 'full'
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EventComponent,
    AdminComponent,
    LoginComponent,
    StartComponent,
    SiginUpComponent,
    WeventComponent,
    EventformComponent,
    CreateComponent,
    CategoryComponent,
    TalkformComponent,
    SpeakerformComponent,
    SalonformComponent
   
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
