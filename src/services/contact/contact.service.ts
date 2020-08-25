import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  sendContactRequest = (name, email, message) => {
    // https://github.com/firebase/functions-samples/tree/master/quickstarts/email-users
    var timestamp = Date.now();
    var data = {
      "name": name,
      "email": email,
      "message": message,
      "timestamp": timestamp
    }
    return new Promise<any>((resolve, reject) => {

      this.firestore
        .collection('contactFormsTemp')
        .add(data);

      this.firestore
        .collection('contactForms')
        .doc(email)
        .set({
          messages : firebase.firestore.FieldValue.arrayUnion(data)
        }, { merge : true });
      // this.firestore
      //   .collection('contactForms')
      //   .doc(email)
      //   .update({
      //     messages : firebase.firestore.FieldValue.arrayUnion(data)
      //   });
        // .collection('contactForms')
        // .doc(email)
        // .set({'messages' : [data]}, { merge : true })
        // .collection("contactForms")
        // .doc(email)
        // .set(data, { merge : true })
        // .then(res => { }, err => reject(err));
        // .collection("contactForms")
        // .add(data)
        // .then(res => { }, err => reject(err));
    });
  }

}
