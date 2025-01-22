import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sub-menu-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgFor, CommonModule],
  templateUrl: './sub-menu-layout.component.html',
  styleUrls: ['./sub-menu-layout.component.css']
})
export class SubMenuLayoutComponent {

    menuList: any[] = [
      {
        title: 'Home',
        children: [
          { title: 'Dashboard', route: 'dashboard'},
          { title: 'Analytics', route: 'dashboard'},
          { title: 'Marketing', route: 'dashboard'}
        ]
      },
      {
        title: 'Employee',
        children: [
          { title: 'New Employee', route: 'employee'},
          { title: 'Employee List', route: 'employee'}
        ]
      },
      {
        title: 'Master',
        children: [
          { title: 'City', route: 'dashboard'},
          { title: 'State', route: 'dashboard'},
          { title: 'District', route: 'dashboard'},
          { title: 'Dropdown', route: 'dashboard'},
          { title: 'Designations', route: 'dashboard' }
        ]
      },
    ];

    expandedMenu: string = '';

    onExpand(parentMenu: string) {
      if(this.expandedMenu === parentMenu) {
        this.expandedMenu = '';
      } else {
        this.expandedMenu = parentMenu;
      } 
  }
}
