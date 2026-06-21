import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Campanha } from '../models/campanha';

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {

  private colecao = 'campanhas';

  constructor(private firestore: Firestore) {}

  listar(): Observable<Campanha[]> {

    const ref = collection(
      this.firestore,
      this.colecao
    );

    return collectionData(
      ref,
      { idField: 'id' }
    ) as Observable<Campanha[]>;
  }

}
