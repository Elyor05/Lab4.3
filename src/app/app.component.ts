import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent],
  template: `
    <main>
      <header>Welcome to TechInStock.com</header>
      <h4>We have everything from Tech world</h4>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styles: `
    :host {
      main {
        background-color: #cacae1;
      }

      header, h4 {
        margin: 10px;
        padding: 5px;
        display: flex;
        justify-content: center;
        font-family: "Bodoni MT Condensed", serif;
        font-size: 36px;
        word-spacing: 8px;
        letter-spacing: 2px;
      }

      header {
        color: #4946ca;
      }

      h4 {
        color: #5f5cc6;
      }
    }
  `,
})
export class AppComponent {
  title = 'Homes';
}


