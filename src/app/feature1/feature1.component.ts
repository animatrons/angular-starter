import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink, RouterModule],
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss']
})
export class Feature1Component {

}
