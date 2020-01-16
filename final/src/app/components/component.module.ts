import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficoComponent } from './grafico/grafico.component';

import { CreateeventformComponent } from './createeventform/createeventform.component';





@NgModule({
  declarations: [ 

    NavbarComponent,
    GraficoComponent,

    CreateeventformComponent,

  ],
    
  exports:[
    GraficoComponent,
    NavbarComponent,

    CreateeventformComponent,

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
