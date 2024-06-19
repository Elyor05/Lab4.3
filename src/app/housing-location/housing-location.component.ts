import { Component,Input } from '@angular/core';
import {HousingLocation} from '../housinglocation';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [srcset]="housingLocation.image"
        alt="Photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.description }}</p>
      <p class="rating">Rating : {{ housingLocation.rating }}</p>
      <button type="button" (click)="shareViaTelegram(housingLocation)">Share via Telegram</button>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

  shareViaTelegram(product: any) {
    const url = encodeURIComponent(product.link);
    const telegramUrl = `https://telegram.me/share/url?url=${product.name}&text=Only in TechInStock.com you can buy ${product.name} and more other things that are related to Tech World!`;
    window.open(telegramUrl, '_blank');
  }
}
