import { Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnDestroy{

  results: any[] =
    [
      {
        "name": "Mujeres entre 18 y 30",
        "value": 20
      },
      {
        "name": "Hombres entre 18 y 30",
        "value": 30
      },
      {
        "name": "Mujeres mayor de 30",
        "value": 15
      },
      {
        "name": "Hombres mayor de 30",
        "value": 15
      }
    ];
  
 


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votos';
  showYAxisLabel = true;
  yAxisLabel = 'Juegos';

  colorScheme = 'nightLights';

    intervalo;

  constructor() {


    this.intervalo = setInterval( () => {
      console.log('tick');
      const newResults = [...this.results];

      for(let i in newResults){
        newResults[i].value= Math.round(Math.random() * 500);
      }

      this.results=[...newResults];
    },1500);
    

  }

  onSelect(event) {
    console.log(event);
  }
  ngOnDestroy(){
    clearInterval(this.intervalo);
  }
}
