import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  items: MenuItem[];

  constructor() { 

    this.items = [
      {label: 'Inicio', icon: 'pi pi-fw pi-home', command: (event) => {this.ruta('#home')}},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar', command: (event) => {this.holaMundo2(event)}},
      {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];
  }

  ruta(ruta: string) {
    
    
  }

  holaMundo2(name: any) {
    console.log(name);
  }
}
