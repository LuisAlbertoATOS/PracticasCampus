import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  showParagraph:boolean = false;
  log:Date[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleParagraph(){
    this.showParagraph = !this.showParagraph;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
