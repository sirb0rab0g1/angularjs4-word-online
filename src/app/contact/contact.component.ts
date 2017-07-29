import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactObject = [
    {
      img:'../assets/images/Zp5lUnYl.jpg',
      title:'Kent Dela Cruz Fueconcillo',
      desc:'Tell me what you think.'
    }
  ]
}
