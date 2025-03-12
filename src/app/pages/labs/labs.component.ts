import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss',
})
export class LabsComponent {
  title = 'BookList';
  books = [
    'El tablero de la reina',
    'La telaraña',
    'Parque Jurásico',
    'Maldita Roma',
  ];
  newSintaxFor = '@for';
  render = '{{}}';

  bookInfo = {
    cover:
      'https://librerialerner.vtexassets.com/arquivos/ids/1988916-800-800?v=638657095409270000&width=800&height=800&aspect=true',
    name: 'El tablero de la reina',
    author: 'Luis Zueco',
    editorial: 'Ediciones B',
  };

  addCart() {
    alert('Added book :)');
  }
}
