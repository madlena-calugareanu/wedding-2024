import { Component, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export class AppComponent {
  title = 'personal-2024';
  heroImage = 'assets/photos/champagne.JPG';
  navbar: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    // this.oopConsole();
  }

  ngOnInit(): void {}

  ngOnChanges() {}
}
