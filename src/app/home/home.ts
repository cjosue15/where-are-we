import {
  Component,
  computed,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import {
  GoogleMap,
  MapAdvancedMarker,
  MapPolyline,
} from '@angular/google-maps';
import { User, users } from '../../data';
import { ListUser } from '../components/list-user';
import { ViewAll } from '../components/view-all';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [GoogleMap, MapAdvancedMarker, MapPolyline, ListUser, ViewAll],
  styles: `
    google-map {
      ::ng-deep .map-container {
        height: calc(100vh - 156px) !important;
      }
    }
  `,
})
export default class Home {
  center: google.maps.LatLngLiteral = { lat: -12.0464, lng: -77.0428 }; // Lima
  markers = signal<Array<{ lat: number; lng: number; label: string }>>([]);
  options: google.maps.MapOptions = {
    mapId: 'bbec20c37cf8cfc64c60bf20',
  };

  currentUser = computed(() => {
    return this.users().find((user) => user.id === this.selectedId()) || null;
  });

  users = signal<User[]>(users);

  distanceMeters = signal<number | null>(null);

  distanceKm = signal<number | null>(null);

  distanceMiles = signal<number | null>(null);

  selectedId = signal<number>(1);

  map = viewChild.required(GoogleMap);

  content = viewChild.required<TemplateRef<any>>('contentTemplate');

  ngOnInit() {
    Promise.resolve().then(() => {
      this.createMarkers({ ...users[0] });
    });
  }

  createMarkers(user: User) {
    this.selectedId.set(user.id);
    this.markers.set([
      {
        lat: user.positions.start.lat,
        lng: user.positions.start.lng,
        label: 'Start',
      },
      {
        lat: user.positions.end.lat,
        lng: user.positions.end.lng,
        label: 'End',
      },
    ]);

    this.distanceMeters.set(null);

    this.fitMapToMarkers();
    this.calculateDistance();
  }

  calculateDistance() {
    const p1 = new google.maps.LatLng(
      this.markers()[0].lat,
      this.markers()[0].lng,
    );
    const p2 = new google.maps.LatLng(
      this.markers()[1].lat,
      this.markers()[1].lng,
    );
    this.distanceMeters.set(
      Math.round(google.maps.geometry.spherical.computeDistanceBetween(p1, p2)),
    );

    const km = ((this.distanceMeters() || 0) / 1000).toFixed(2);
    const miles = ((this.distanceMeters() || 0) / 1609.344).toFixed(2);

    this.distanceKm.set(parseFloat(km));
    this.distanceMiles.set(parseFloat(miles));
  }

  fitMapToMarkers() {
    const bounds = new google.maps.LatLngBounds();

    this.markers().forEach((marker) => {
      bounds.extend(new google.maps.LatLng(marker.lat, marker.lng));
    });

    this.map().googleMap?.fitBounds(bounds, 50); // el 50 es padding opcional
  }

  getMarkerContent(type: 'baby' | 'house' = 'baby'): HTMLElement {
    const container = document.createElement('div');
    const pingContainer = document.createElement('div');
    pingContainer.classList.add(
      'animate-ping',
      'absolute',
      'inset-0',
      'rounded-full',
      'opacity-75',
      type === 'baby' ? 'bg-blue-500' : 'bg-green-500',
    );

    const baby = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-white"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/></svg>`;

    const house = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-white"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>`;

    const markContent = document.createElement('div');

    if (type === 'baby') {
      markContent.innerHTML = baby;

      markContent.classList.add(
        'flex',
        'items-center',
        'justify-center',
        'w-10',
        'h-10',
        'bg-blue-500',
        'rounded-full',
      );
    } else {
      markContent.innerHTML = house;
      markContent.classList.add(
        'flex',
        'items-center',
        'justify-center',
        'w-10',
        'h-10',
        'bg-green-500',
        'rounded-full',
      );
    }

    container.appendChild(markContent);
    container.appendChild(pingContainer);

    return container;
  }
}
