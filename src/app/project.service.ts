import { Injectable } from '@angular/core';
import {ActiveProject} from "./project";
import {PROJECTS} from "./mock-heroes";

@Injectable()
export class ProjectService {

  getProject(): Promise<ActiveProject[]>{
    return Promise.resolve(PROJECTS);
  }

  getProjectSlow(): Promise<ActiveProject[]>{
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getProject()), 2000);
    });
  }
}
