import { Component, OnInit } from '@angular/core';

import { Job } from '../../models/experience/job.model';
import { ExperienceService } from '../../services/experience/experience.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.less']
})
export class ExperiencePageComponent implements OnInit {

  // jobs: Job[];
  jobs;
  toolsUsed: [{}];

  constructor(
    private expService: ExperienceService
  ) {
    this.jobs = [];
  }

  ngOnInit() {
    this.getJobsList();
  }

  getJobsList = () => {
    console.log('getting jobs');
    this.expService.getJobs().subscribe(res => {
      this.jobs = res;
    });
  }


    // this.jobs.map((val, idx, arr) => {
    //   this.jobsHtml.
    // })
    // console.log('Jobs: \n');
    // console.log(this.jobs);

    // console.log(this.jobs);
    // this.jobs.forEach( (job) => {
    //   alert(job);
    //   const toolsUsed = job.toolsUsed;
    //   console.log(job);
    //   const toolsUsedList = Object.keys(toolsUsed == null ? {} : toolsUsed).map( (tool) => {
    //     console.log(tool);
    //     const toolPath = toolsUsed[tool];
    //     return toolPath;
    //   });
    //   console.log(toolsUsedList);
    //   job.toolsUsedList = toolsUsedList;
    //   return job;
    // });

    // Object.keys({ "a" : "test-a", "b" : "test-b", "c" : "test-c" }).map( function(key) {
    //   console.log(key);
    // });


    // this.jobs.map( (job) => {
    //   alert(job);
    //   let toolsUsed = job.toolsUsed;
    //   // console.log(job.toolsUsed);
    //   toolsUsed =  Object.keys(toolsUsed).map( (tool) => {
    //     console.log(toolsUsed[tool]);
    //     return toolsUsed[tool];
    //   });
    //   job.toolsUsed = toolsUsed;
    //   return job;
    // });
    // console.log('Updated jobs');
    // console.log(this.jobs);
    // this.jobs.map( (job: Job) => {
    //   console.log("Job: ", job);
    //   console.log("Tools: ", job.toolsUsed);
    //   console.log("hasOwnProperty(toolsUsed): ", Object.keys(job.hasOwnProperty("toolsUsed")));
    // });
    // this.jobs.forEach( (job: Job) => {
    //   console.log("Job: ", job);
    //   console.log("Tools: ", job.toolsUsed);
    //   console.log("hasOwnProperty(toolsUsed): ", Object.keys(job.hasOwnProperty("toolsUsed")));
    //   // Object.keys(data.hasOwnProperty("toolsUsed") ? data.toolsUsed : {}).map
    //   // this.toolsUsed.push(job.toolsUsed);
    // });

}
