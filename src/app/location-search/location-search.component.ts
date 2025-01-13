import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent {
  location: string = '';
  @Output() locationSelected = new EventEmitter<string>();

  onSearch() {
    if (this.location.trim()) {
      this.locationSelected.emit(this.location);
    }
  }
}
