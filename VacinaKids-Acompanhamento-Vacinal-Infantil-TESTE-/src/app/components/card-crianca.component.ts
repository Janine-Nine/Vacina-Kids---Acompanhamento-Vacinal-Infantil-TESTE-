import { Component, Input } from '@angular/core';

import { Crianca } from '../../models/crianca';

@Component({
  selector: 'app-card-crianca',
  templateUrl: './card-crianca.component.html',
  styleUrls: ['./card-crianca.component.scss']
})
export class CardCriancaComponent {

  @Input()
  crianca!: Crianca;

}