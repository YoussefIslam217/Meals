import { Component } from '@angular/core';
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { CatergoriesComponent } from "./components/catergories/catergories.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent, CatergoriesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meals';
}
