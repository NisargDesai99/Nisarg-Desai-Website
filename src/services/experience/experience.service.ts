import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore/';

import { resolve } from 'core-js/es6/promise';
import { reject } from 'core-js/es6/promise';

import { Job } from '../../models/experience/job.model';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  jobs: AngularFirestoreCollection<Job>;
  private taskDoc: AngularFirestoreDocument<Job>;

  constructor(
    private firestore: AngularFirestore,
  ) {
  }

  getJobs() {
    return this.firestore.collection(`experience`).snapshotChanges();
  }

  // getJobsList(): Job[] {
  //   const returnJobs: Job[] = [];

  //   this.jobs.get().toPromise().then( (val) => {
  //     return val.docs;
  //   }).then( (documents) => {
  //     return documents.map( (val) => {
  //       const jobData = val.data();
  //       const job = new Job(
  //         jobData.companyName,
  //         jobData.title,
  //         jobData.role,
  //         jobData.link,
  //         jobData.toolsUsed,
  //         jobData.toolsUsedList,
  //         jobData.toolsList,
  //         jobData.start,
  //         jobData.end
  //       );
  //       returnJobs.push(job);
  //       return job;
  //     });
  //   }).catch( (reason) => {
  //     console.log('Can\'t get jobs:', reason);
  //     return '';
  //   });

  //   // this.jobs.get().toPromise().then( (val) => {
  //   //   return val.docs;
  //   // }).then( (documents) => {
  //   //   console.log("Documents: ", documents);
  //   //   return documents.map( (val) => {
  //   //     return val.data();
  //   //   });
  //   // }).then( (jobList: Job[]) => {
  //   //   var newList = jobList.map( (job: Job) => {

  //   //   });
  //   // });

  //   // returnJobs.map( (val) => {
  //   //   console.log(val);
  //   // })
  //   return returnJobs;

  //   // return new Promise<Job[]>((resolve, reject) => {
  //   //   resolve(this.jobs.get().toPromise().then((val) => { return val.docs; })
  //   //     .then( (documents) => {
  //   //       return resolve(documents.map( (item) => {
  //   //         var jobData = item.data();
  //   //         var job = new Job(
  //   //           jobData.companyName,
  //   //           jobData.title,
  //   //           jobData.role,
  //   //           jobData.link,
  //   //           jobData.toolsUsed,
  //   //           jobData.start,
  //   //           jobData.end
  //   //         );
  //   //         return job;
  //   //       });
  //   //       )
  //   //     });
  //   //   );

  //   // reject();

  //   // }).then((val) => {return val});
  // }

}
