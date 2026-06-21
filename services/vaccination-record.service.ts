import { Injectable, inject } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  docData,
  query,
  where
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { VaccinationRecord } from '../models/vaccination-record.model';

@Injectable({
  providedIn: 'root'
})
export class VaccinationRecordService {

  private firestore = inject(Firestore);

  private collectionName = 'vaccination-records';

  getVaccinationRecords(): Observable<VaccinationRecord[]> {

    const ref = collection(
      this.firestore,
      this.collectionName
    );

    return collectionData(
      ref,
      { idField: 'id' }
    ) as Observable<VaccinationRecord[]>;
  }

  getVaccinationRecordsByChild(childId: string): Observable<VaccinationRecord[]> {

    const ref = collection(
      this.firestore,
      this.collectionName
    );

    const q = query(
      ref,
      where('childId', '==', childId)
    );

    return collectionData(
      q,
      { idField: 'id' }
    ) as Observable<VaccinationRecord[]>;
  }

  getVaccinationRecordById(id: string): Observable<VaccinationRecord> {

    const ref = doc(
      this.firestore,
      `${this.collectionName}/${id}`
    );

    return docData(
      ref,
      { idField: 'id' }
    ) as Observable<VaccinationRecord>;
  }

  async addVaccinationRecord(record: VaccinationRecord) {

    const ref = collection(
      this.firestore,
      this.collectionName
    );

    return await addDoc(ref, record);
  }

  async updateVaccinationRecord(
    id: string,
    record: Partial<VaccinationRecord>
  ) {

    const ref = doc(
      this.firestore,
      `${this.collectionName}/${id}`
    );

    return await updateDoc(ref, {
      ...record
    });
  }

  async deleteVaccinationRecord(id: string) {

    const ref = doc(
      this.firestore,
      `${this.collectionName}/${id}`
    );

    return await deleteDoc(ref);
  }

  getLateVaccinations(): Observable<VaccinationRecord[]> {

    const ref = collection(
      this.firestore,
      this.collectionName
    );

    const q = query(
      ref,
      where('status', '==', 'Atrasada')
    );

    return collectionData(
      q,
      { idField: 'id' }
    ) as Observable<VaccinationRecord[]>;
  }

  getPendingVaccinations(): Observable<VaccinationRecord[]> {

    const ref = collection(
      this.firestore,
      this.collectionName
    );

    const q = query(
      ref,
      where('status', '==', 'Pendente')
    );

    return collectionData(
      q,
      { idField: 'id' }
    ) as Observable<VaccinationRecord[]>;
  }

  getAppliedVaccinations(): Observable<VaccinationRecord[]> {

    const ref = collection(
      this.firestore,
      this.collectionName
    );

    const q = query(
      ref,
      where('status', '==', 'Aplicada')
    );

    return collectionData(
      q,
      { idField: 'id' }
    ) as Observable<VaccinationRecord[]>;
  }

}
