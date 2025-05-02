import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {


    isHidden: boolean = true;
  
    toggleSidebar() {
      this.isHidden = !this.isHidden;
    }
  
    closeSideBar(e: any, screen: HTMLElement) {

      if (e.target === screen) {
        this.isHidden = true;
      }
    }



}
