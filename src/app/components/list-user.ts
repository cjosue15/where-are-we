import { Component, input, output, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { User, users } from '../../data';

@Component({
  selector: 'list-user',
  imports: [NgOptimizedImage],
  template: `
    <uL
      class="min-w-80 p-4 bg-white min-h-screen border-r border border-border"
    >
      @for (user of users(); track user.id) {
        <li
          class="border border-gray-300 mb-4 last:mb-0 p-4 rounded-xl flex items-start gap-4 cursor-pointer hover:shadow-md transition"
          [class.bg-blue-50]="selectedId() === user.id"
          [class.!border-blue-600]="selectedId() === user.id"
          (click)="onChange.emit(user)"
        >
          <div
            class="flex items-center justify-center bg-gray-300 rounded-full size-10 overflow-hidden"
          >
            <img [src]="user.image" width="40" height="40" priority />
            <!-- <img [ngSrc]="user.image" width="40" height="40" priority /> -->
          </div>
          <div>
            <h3>{{ user.name }}</h3>
            <span class="text-sm text-black"
              >Current location: {{ user.currentLocation }}</span
            >
          </div>
        </li>
      }
    </uL>
  `,
})
export class ListUser {
  users = signal<User[]>(users);

  selectedId = input<number | undefined>(undefined);

  onChange = output<User>();
}
