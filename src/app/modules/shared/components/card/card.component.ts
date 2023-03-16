import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() imageUrl!: string;
  @Input() isButtonDisabled!: boolean;
  @Input() isFavorite!: boolean;
  @Output() favoriteToggle = new EventEmitter<void>();

  toggleFavorite() {
    this.favoriteToggle.emit();
  }

}
