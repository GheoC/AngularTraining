import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCardComponent } from './components/shared-card/shared-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [SharedCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [SharedCardComponent]
})
export class SharedModule { }
