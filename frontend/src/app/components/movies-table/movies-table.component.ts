import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../app.component.types';

@Component({
  selector: 'app-movies-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-table.component.html',
  styleUrl: './movies-table.component.scss'
})
export class MoviesTableComponent {
  @Input() movies: Movie[] = [];

}
