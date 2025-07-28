import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'view-all',
  imports: [RouterLink],
  template: `
    <a
      routerLink="/all"
      class="bg-blue-500 text-white px-4 py-2 rounded-md absolute bottom-5 left-5"
    >
      <p class="font-semibold">View all</p>
    </a>
  `,
})
export class ViewAll {}
