import { Component } from '@angular/core';
import { Platillo } from '../servicios/platillos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  searchQuery: string = '';
  searchResults: Platillo[] = [
    { id: 1, nombre: 'Platillo 1', descripcion: 'Descripción del platillo 1',cantidad:10,costo:50},
    { id: 2, nombre: 'Platillo 2', descripcion: 'Descripción del platillo 2',cantidad:10,costo:50 },
    { id: 3, nombre: 'Platillo 3', descripcion: 'Descripción del platillo 3' ,cantidad:10,costo:50}
  ];

  search() {
    // Aquí puedes implementar la lógica de búsqueda según tus necesidades
    // Por ejemplo, puedes filtrar los resultados basándote en la propiedad 'nombre'
    this.searchResults = this.searchResults.filter(platillo => platillo.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
}
