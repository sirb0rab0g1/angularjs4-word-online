import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  text1: string = '<div>Hello World!</div><div>Welcome to my own version of <b>Microsoft Word Online</b> enjoy!</div><div><br></div>';

}
