import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficoComponent } from './grafico/grafico.component';
import { CarouselComponent} from './carousel/carousel.component';
import { CreateeventformComponent } from './createeventform/createeventform.component';
import { CreatetalkComponent } from './createtalk/createtalk.component';
import { CreatespeakerComponent } from './createspeaker/createspeaker.component';







@NgModule({
  declarations: [ 

    NavbarComponent,
    GraficoComponent,
    CarouselComponent,
    CreateeventformComponent,
    CreatetalkComponent,
    CreatespeakerComponent,
    
    

  ],
    
  exports:[
    GraficoComponent,
    NavbarComponent,
    CarouselComponent,
    CreateeventformComponent,
    CreatetalkComponent,
    CreatespeakerComponent,
    

  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class ComponentModule { }
