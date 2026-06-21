import { Component, Input } from '@angular/core';

import { Vacina } from '../../models/vacina';

@Component({
  selector: 'app-card-vacina',
  templateUrl: './card-vacina.component.html',
  styleUrls: ['./card-vacina.component.scss']
})
export class CardVacinaComponent {

  @Input()
  vacina!: Vacina;

}
