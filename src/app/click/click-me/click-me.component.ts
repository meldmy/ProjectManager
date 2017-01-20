import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent{

	clickedCount = 0;
	rolledSectionNames = ['FL', 'R', 'RECt', 'Rt', 'SQ', 'SQt'];
	lightValue = '';
  	value = '';


  constructor() { }

  update(value: string) { this.value = value; }

 	addRolledSection(rolledSection: string){
 		if(rolledSection){
 			this.rolledSectionNames.push(rolledSection);
 		}
 	}
 
  onClickMe(){
  	this.clickedCount += 1;
  }

  onKeyRight(value: string) {
    this.lightValue += value + ' | ';
  }
  
}
