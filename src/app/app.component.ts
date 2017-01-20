import {Component, OnInit} from "@angular/core";
import {ActiveProject} from "./project";
import {ProjectService} from "./project.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectService]
})


export class AppComponent implements OnInit {

  title = 'EasyFix Projects';
  activeProjects: ActiveProject[];
  selectedProject: ActiveProject;

  constructor(private projectService: ProjectService) {
  }

  getProjects() {
    return this.projectService.getProjectSlow().then(activeProjects=> this.activeProjects = activeProjects);
  }

  ngOnInit(): void {
    this.getProjects();
  }

  onSelect(project: ActiveProject): void {
    this.selectedProject = project;
    this.title = this.selectedProject.name;
  }
}

