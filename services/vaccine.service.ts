import { Injectable, inject } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  docData
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Vaccine } from '../models/vaccine.model';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  private firestore = inject(Firestore);

  private collectionName = 'vaccines';

  getVaccines(): Observable<Vaccine[]> {

    const ref = collection(
      this.firestore,
      this.collectionName
    );

    return collectionData(
      ref,
      { idField: 'id' }
    ) as Observable<Vaccine[]>;
  }

  getVaccineById(id: string) {

    const ref = doc(
      this.firestore,
      `${this.collectionName}/${id}`
    );

    return docData(
      ref,
      { idField: 'id' }
    );
  }

  async addVaccine(vaccine: Vaccine) {

    const ref = collection(
      this.firestore,
      this.collectionName
    );

    return await addDoc(ref, vaccine);
  }

  async updateVaccine(
    id: string,
    vaccine: Partial<Vaccine>
  ) {

    const ref = doc(
      this.firestore,
      `${this.collectionName}/${id}`
    );

    return await updateDoc(ref, {
      ...vaccine
    });
  }

  async deleteVaccine(id: string) {

    const ref = doc(
      this.firestore,
      `${this.collectionName}/${id}`
    );

    return await deleteDoc(ref);
  }

}
