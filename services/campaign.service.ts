import { Injectable, inject } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Campaign } from '../models/campaign.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private firestore = inject(Firestore);

  private collectionName = 'campaigns';

  getCampaigns(): Observable<Campaign[]> {

    const ref = collection(
      this.firestore,
      this.collectionName
    );

    return collectionData(
      ref,
      { idField: 'id' }
    ) as Observable<Campaign[]>;
  }

  getActiveCampaigns(): Observable<Campaign[]> {

    const ref = collection(
      this.firestore,
      this.collectionName
    );

    const q = query(
      ref,
      where('active', '==', true)
    );

    return collectionData(
      q,
      { idField: 'id' }
    ) as Observable<Campaign[]>;
  }

  async addCampaign(
    campaign: Campaign
  ) {

    const ref = collection(
      this.firestore,
      this.collectionName
    );

    return await addDoc(ref, campaign);
  }

  async updateCampaign(
    id: string,
    campaign: Partial<Campaign>
  ) {

    const ref = doc(
      this.firestore,
      `${this.collectionName}/${id}`
    );

    return await updateDoc(ref, {
      ...campaign
    });
  }

  async deleteCampaign(id: string) {

    const ref = doc(
      this.firestore,
      `${this.collectionName}/${id}`
    );

    return await deleteDoc(ref);
  }

}
