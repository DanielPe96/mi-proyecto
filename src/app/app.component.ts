import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    
    
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Cliente', url: '/cliente', icon: 'cube' },
    { title: 'Producto', url: '/producto', icon: 'laptop' },
    { title: 'Login', url: '/login', icon: 'people' },

    
  ];
  constructor() {}
}
