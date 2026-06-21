import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-vacinal',
  templateUrl: './status-vacinal.component.html',
  styleUrls: ['./status-vacinal.component.scss']
})
export class StatusVacinalComponent {

  @Input()
  status!: string;

}
