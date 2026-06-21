import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CriancaService } from '../services/crianca.service';
import { Crianca } from '../models/crianca';

@Component({
  selector: 'app-criancas',
  templateUrl: './criancas.page.html',
  styleUrls: ['./criancas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonBadge,
    IonButton,
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
export class CriancasPage implements OnInit {

  criancas: Crianca[] = [];

  constructor(
    private criancaService: CriancaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.criancaService.listar().subscribe(data => {
      this.criancas = data;
    });
  }

  verDetalhes(crianca: Crianca) {
    this.router.navigate(['/detalhes-crianca'], { state: { crianca } });
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'EM_DIA': return 'success';
      case 'PENDENTE': return 'warning';
      case 'ATRASADA': return 'tertiary';
      default: return 'medium';
    }
  }

  getStatusLabel(status: string): string {
    switch(status) {
      case 'EM_DIA': return 'EM DIA';
      case 'PENDENTE': return 'PENDENTE';
      case 'ATRASADA': return 'ATRASADA';
      default: return status;
    }
  }

}
