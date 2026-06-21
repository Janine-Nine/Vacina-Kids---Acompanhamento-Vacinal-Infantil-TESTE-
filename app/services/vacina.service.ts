import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData,
  addDoc
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Vacina } from '../models/vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  private colecao = 'vacinas';

  constructor(private firestore: Firestore) {}

  listar(): Observable<Vacina[]> {

    const ref = collection(
      this.firestore,
      this.colecao
    );

    return collectionData(
      ref,
      { idField: 'id' }
    ) as Observable<Vacina[]>;
  }

  adicionar(vacina: Vacina) {

    const ref = collection(
      this.firestore,
      this.colecao
    );

    return addDoc(ref, vacina);
  }

}
