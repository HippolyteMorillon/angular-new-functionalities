import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import {
  ContentClient,
  ContentItem,
  DefaultContentBody,
} from 'dc-delivery-sdk-js';

@Injectable({
  providedIn: 'root',
})
export class AmplienceService {
  private readonly client = new ContentClient({ hubName: 'docsportal' });

  private readonly deliveryKey = 'banner-example';

  private readonly http = inject(HttpClient);

  private readonly slotID = '7ba216e9-7db2-41fa-ba0b-e1833f162be0';

  private readonly contentUrl =
    'https://cdn.c1.amplience.net/v1/content/ampproduct/content-item/' +
    this.slotID +
    '?template=banner_slot_template';

  private readonly banner: WritableSignal<any> = signal({});

  getBanner(): Promise<ContentItem<DefaultContentBody>> {
    return this.client.getContentItemByKey(this.deliveryKey);
  }

  getHtmlBanner(): void {
    const headers = new HttpHeaders({
      Accept: 'text/html',
      XFF: 'testing123',
    });

    console.log(headers);

    this.http
      .get(this.contentUrl, { responseType: 'text' })
      .subscribe((html: any) => {
        console.log(html);
        this.banner.set(html);
        console.log(this.banner());
      });
  }

  get bannerSignal() {
    return this.banner.asReadonly();
  }
}
