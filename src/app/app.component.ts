import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  template1 = true;
  template2 = false;
  template3 = false;
  template4 = false;
  template5 = false;
  template6 = false;
  template7 = false;
  template8 = false;
  template9 = false;
  sidemenu(index) {
    if (index == 1) {
      console.log('number 1 me');
      this.template1 = true;
      this.template2 = false;
      this.template3 = false;
      this.template4 = false;
      this.template5 = false;
      this.template6 = false;
      this.template7 = false;
      this.template8 = false;
      this.template9 = false;
    } else if (index == 2) {
      console.log('number 2 me');
      this.template1 = false;
      this.template2 = true;
      this.template3 = false;
      this.template4 = false;
      this.template5 = false;
      this.template6 = false;
      this.template7 = false;
      this.template8 = false;
      this.template9 = false;
    } else if (index == 3) {
      console.log('number 2 me');
      this.template1 = false;
      this.template2 = false;
      this.template3 = true;
      this.template4 = false;
      this.template5 = false;
      this.template6 = false;
      this.template7 = false;
      this.template8 = false;
      this.template9 = false;
    } else if (index == 4) {
      console.log('number 2 me');
      this.template1 = false;
      this.template2 = false;
      this.template3 = false;
      this.template4 = true;
      this.template5 = false;
      this.template6 = false;
      this.template7 = false;
      this.template8 = false;
      this.template9 = false;
    } else if (index == 5) {
      console.log('number 2 me');
      this.template1 = false;
      this.template2 = false;
      this.template3 = false;
      this.template4 = false;
      this.template5 = true;
      this.template6 = false;
      this.template7 = false;
      this.template8 = false;
      this.template9 = false;
    } else if (index == 6) {
      console.log('number 2 me');
      this.template1 = false;
      this.template2 = false;
      this.template3 = false;
      this.template4 = false;
      this.template5 = false;
      this.template6 = true;
      this.template7 = false;
      this.template8 = false;
      this.template9 = false;
    } else if (index == 7) {
      console.log('number 2 me');
      this.template1 = false;
      this.template2 = false;
      this.template3 = false;
      this.template4 = false;
      this.template5 = false;
      this.template6 = false;
      this.template7 = true;
      this.template8 = false;
      this.template9 = false;
    } else if (index == 8) {
      console.log('number 2 me');
      this.template1 = false;
      this.template2 = false;
      this.template3 = false;
      this.template4 = false;
      this.template5 = false;
      this.template6 = false;
      this.template7 = false;
      this.template8 = true;
      this.template9 = false;
    } else if (index == 9) {
      console.log('number 2 me');
      this.template1 = false;
      this.template2 = false;
      this.template3 = false;
      this.template4 = false;
      this.template5 = false;
      this.template6 = false;
      this.template7 = false;
      this.template8 = false;
      this.template9 = true;
    }
  }

  myObject = [
    {
      name: 'Info'
    },
    {
      name: 'New'
    },
    {
      name: 'Open'
    },
    {
      name: 'Save As'
    },
    {
      name: 'Print'
    },
    {
      name: 'Share'
    },
    {
      name: 'About'
    },
    {
      name: 'Contact'
    }
  ]

  color = 'primary';
  mode = 'buffer';
  value = 5;
  bufferValue = 75;
}
