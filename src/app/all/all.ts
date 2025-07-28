import { Component, signal, viewChild } from '@angular/core';
import {
  GoogleMap,
  MapAdvancedMarker,
  MapPolyline,
} from '@angular/google-maps';
import { User, users } from '../../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'view-all',
  imports: [GoogleMap, MapAdvancedMarker, MapPolyline, RouterLink],
  template: `
    <google-map
      [options]="options"
      width="100%"
      [center]="center"
      [zoom]="4"
      class="block w-full"
    >
      @for (user of users(); track user.id) {
        <map-advanced-marker
          [position]="{
            lat: user.positions.start.lat,
            lng: user.positions.start.lng,
          }"
          [content]="getStartMarkerContent()"
        />

        <map-advanced-marker
          [position]="{
            lat: user.positions.end.lat,
            lng: user.positions.end.lng,
          }"
          [content]="getEndMarkerContent(user.image)"
          (mapClick)="fitBounds(user)"
        />

        <map-polyline
          [options]="{
            path: [
              {
                lat: user.positions.start.lat,
                lng: user.positions.start.lng,
              },
              {
                lat: user.positions.end.lat,
                lng: user.positions.end.lng,
              },
            ],
            strokeColor: user.strokeColor,
            strokeOpacity: 0,
            icons: [
              {
                icon: { path: 'M 0,-1 0,1', strokeOpacity: 1, scale: 4 },
                offset: '0',
                repeat: '20px',
              },
            ],
          }"
        ></map-polyline>
      }

      <div class="flex items-center gap-5 absolute bottom-4 left-4">
        <button
          class="bg-green-500 text-white px-4 py-2 rounded-md"
          (click)="backToViewAll()"
        >
          Back to view all
        </button>

        <a routerLink="/" class="bg-blue-500 text-white px-4 py-2 rounded-md">
          Back
        </a>
      </div>
    </google-map>
  `,
  styles: `
    :host {
      position: relative;
    }
    google-map {
      ::ng-deep .map-container {
        height: 100vh !important;
      }
    }
  `,
})
export default class ViewAll {
  center: google.maps.LatLngLiteral = { lat: -15.2020952, lng: -69.2603208 };

  options: google.maps.MapOptions = {
    mapId: 'bbec20c37cf8cfc64c60bf20',
  };

  users = signal<User[]>(users);

  map = viewChild.required(GoogleMap);

  zoom = signal(4);

  getPositionsByUser(user: User): Array<{ lat: number; lng: number }> {
    return [
      {
        lat: user.positions.start.lat,
        lng: user.positions.start.lng,
      },
      {
        lat: user.positions.end.lat,
        lng: user.positions.end.lng,
      },
    ];
  }

  getStartMarkerContent(): HTMLElement {
    const container = document.createElement('div');
    const pingContainer = document.createElement('div');
    pingContainer.classList.add(
      'animate-ping',
      'absolute',
      'inset-0',
      'rounded-full',
      'opacity-75',
      'bg-green-500',
    );

    const baby = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-white"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/></svg>`;

    const markContent = document.createElement('div');

    markContent.innerHTML = baby;

    markContent.classList.add(
      'flex',
      'items-center',
      'justify-center',
      'w-10',
      'h-10',
      'bg-green-500',
      'rounded-full',
    );

    container.appendChild(markContent);
    container.appendChild(pingContainer);

    return container;
  }

  getEndMarkerContent(image: string): HTMLElement {
    const beachFlag = image;
    let imgTag = document.createElement('img');
    imgTag.src = beachFlag;
    imgTag.width = 40;
    imgTag.height = 40;
    imgTag.classList.add('rounded-full', 'border', 'border-gray-300');

    return imgTag;
  }

  fitBounds(user: User) {
    const bounds = new google.maps.LatLngBounds();

    bounds.extend({
      lat: user.positions.start.lat,
      lng: user.positions.start.lng,
    });

    bounds.extend({
      lat: user.positions.end.lat,
      lng: user.positions.end.lng,
    });

    this.map().googleMap?.fitBounds(bounds, 50);
  }

  backToViewAll() {
    const bounds = new google.maps.LatLngBounds();
    this.users().forEach((user) => {
      bounds.extend({
        lat: user.positions.start.lat,
        lng: user.positions.start.lng,
      });
      bounds.extend({
        lat: user.positions.end.lat,
        lng: user.positions.end.lng,
      });
    });

    this.map().googleMap?.fitBounds(bounds, 50);
  }
}
