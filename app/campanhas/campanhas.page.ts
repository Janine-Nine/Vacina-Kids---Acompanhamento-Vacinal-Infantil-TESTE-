import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { CampanhaService } from '../services/campanha.service';
import { Campanha } from '../models/campanha';

@Component({
  selector: 'app-campanhas',
  templateUrl: './campanhas.page.html',
  styleUrls: ['./campanhas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  ]
})
export class CampanhasPage implements OnInit {

  campanhas: Campanha[] = [];

  constructor(private campanhaService: CampanhaService) {}

  ngOnInit() {
    this.campanhaService.listar().subscribe(data => {
      this.campanhas = data;
    });
  }

}
