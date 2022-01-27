import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  items: MenuItem[];

  activeItem: MenuItem;
  
  constructor() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', command: (event) => {this.holaMundo(event)}},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar', command: (event) => {this.holaMundo2(event)}},
      {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    this.activeItem = this.items[3];
  }

  holaMundo(name: any) {
    console.log(name);
  }

  holaMundo2(name: any) {
    console.log(name);
  }
}