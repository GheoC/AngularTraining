import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss']
})
export class SharedCardComponent {

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() imageUrl!: string;
  @Input() details: any[] = ['one', 'two', 'three'];
  @Input() buttonDisabled: boolean = false
  @Output() favorite = new EventEmitter<void>

  heartStatus: boolean = false
  
  addFavorite() {
    this.favorite.emit();
    this.heartStatus = !this.heartStatus
  }

}
