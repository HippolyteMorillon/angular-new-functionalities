import { Component, inject, Signal } from '@angular/core';
import { AmplienceService } from '../services/amplience.service';

@Component({
  selector: 'app-amplience-page',
  imports: [],
  templateUrl: './amplience-page.component.html',
  styleUrl: './amplience-page.component.css',
  standalone: true,
})
export class AmpliencePageComponent {
  private readonly amplienceService = inject(AmplienceService);

  public headline: string = '';
  public strapline: string = '';
  public bannerSignal: Signal<any>;

  constructor() {
    this.getBanner();
    this.amplienceService.getHtmlBanner();
    this.bannerSignal = this.amplienceService.bannerSignal;
    console.log(this.bannerSignal());
  }

  getBanner() {
    this.amplienceService.getBanner().then((banner) => {
      this.headline = banner.body['headline'];
      this.strapline = banner.body['strapline'];
    });
  }
  test() {
    console.log(console.log(this.bannerSignal()));
  }
}
