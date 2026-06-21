import { Injectable, inject } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  docData
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Child } from '../models/child.model';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  private firestore = inject(Firestore);

  private collectionName = 'children';

  getChildren(): Observable<Child[]> {

    const ref = collection(
      this.firestore,
      this.collectionName
    );

    return collectionData(
      ref,
      { idField: 'id' }
    ) as Observable<Child[]>;
  }

  getChildById(id: string): Observable<Child> {

    const ref = doc(
      this.firestore,
      `${this.collectionName}/${id}`
    );

    return docData(
      ref,
      { idField: 'id' }
    ) as Observable<Child>;
  }

  async addChild(child: Child) {

    const ref = collection(
      this.firestore,
      this.collectionName
    );

    return await addDoc(ref, child);
  }

  async updateChild(
    id: string,
    child: Partial<Child>
  ) {

    const ref = doc(
      this.firestore,
      `${this.collectionName}/${id}`
    );

    return await updateDoc(ref, {
      ...child
    });
  }

  async deleteChild(id: string) {

    const ref = doc(
      this.firestore,
      `${this.collectionName}/${id}`
    );

    return await deleteDoc(ref);
  }

}
