import {Component, Input} from "@angular/core";
import {ActiveProject} from "./project";

@Component({
  selector: 'project-detail',
  template: `
             <div *ngIf="project">
                <h2>{{project.name}} details!</h2>
                <div><label>id: </label>{{project.id}}</div>
                <div>
                  <label>name: </label>
                  <input [(ngModel)]="project.name" placeholder="name"/>
                </div>
             </div>`
})
export class ProjectDetailComponent {
  @Input('activeProject')
  project: ActiveProject;
}
