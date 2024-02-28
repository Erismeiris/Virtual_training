
import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Register } from '../interfaces/all-interfaces';


const PATH = 'participants';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, PATH);

  constructor() { }

  getParticipants() {
    return collectionData(this._collection, {idField: "id"}) as Observable<any[]>;
  }

  async getParticipantsById(id: string) {
    try {
      const snapshot = await getDoc(doc(this._collection, id));
      return snapshot.data() as any ;
      
    } catch (error) {
      return undefined;
      
    }
    
  }

  createParticipants(data: any) {
    return addDoc(this._collection, data);
  }

  updateParticipants(id: string, data: any) {
    const document = doc(this._firestore, PATH, id);
    return updateDoc(document, data);
  }

  deleteParticipants(id: string) {
      const document = doc(this._collection, id);
      return deleteDoc(document);
    }
    


}
