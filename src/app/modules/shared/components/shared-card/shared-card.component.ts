import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss']
})
export class SharedCardComponent {

  @Input() imageUrl!: string;
  @Input() isButtonDisabled: boolean = false;
  @Input() isFavorite!: string;
  @Output() favorite = new EventEmitter<void>();

  toggleFavorite() {
    this.favorite.emit();
  }

}
