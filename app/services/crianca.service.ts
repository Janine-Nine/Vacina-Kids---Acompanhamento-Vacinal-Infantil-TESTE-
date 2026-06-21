import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  deleteDoc,
  updateDoc
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Crianca } from '../models/crianca';

@Injectable({
  providedIn: 'root'
})
export class CriancaService {

  private colecao = 'criancas';

  constructor(private firestore: Firestore) {}

  listar(): Observable<Crianca[]> {

    const ref = collection(
      this.firestore,
      this.colecao
    );

    return collectionData(
      ref,
      { idField: 'id' }
    ) as Observable<Crianca[]>;
  }

  adicionar(crianca: Crianca) {

    const ref = collection(
      this.firestore,
      this.colecao
    );

    return addDoc(ref, crianca);
  }

  atualizar(id: string, crianca: Crianca) {

    const ref = doc(
      this.firestore,
      `${this.colecao}/${id}`
    );

    return updateDoc(ref, {
      ...crianca
    });
  }

  excluir(id: string) {

    const ref = doc(
      this.firestore,
      `${this.colecao}/${id}`
    );

    return deleteDoc(ref);
  }

}
